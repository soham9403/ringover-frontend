import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createCartApi, getProductDetailsBySlugApi, rateProductApi } from "../../apis/productApi"
import { AuthContext } from "../../hooksAndProviders/AuthContextProvider"
import { cartContext } from "../../hooksAndProviders/CartContextProvider"
import { CustomPopUpModalContext, modalType } from "../../hooksAndProviders/CustomPopUpModalProvider"
import AlertMessage from "../../templates/components/AlertMessage"
import SuccessMessage from "../../templates/components/SuccessMessage"

import ProductDetails from "../../templates/pages/product/ProductDetails"
import SigninController from "../popups/auth/SigninController"




const ProductDetailsController = () => {
    const modal = useContext(CustomPopUpModalContext)
    const auth = useContext(AuthContext)
    const cart = useContext(cartContext)
    const [loader, setLoader] = useState(false)

    const urlParams = useParams()
    const navigate = useNavigate()

    const [product, setproduct] = useState({})
    const [similllerProducts, setsimillerProducts] = useState([])
    const [customizationList, setCustomizationList] = useState({})
    const [customizeProduct, setCustomizationOfProduct] = useState({})
    const [cartLoader, setCartLoader] = useState(false)
    const fetchProductDetails = async () => {
        setLoader(true)
        const resposne = await getProductDetailsBySlugApi({ slug: urlParams.product_slug })
        if (resposne.status != 1) {
            if (resposne.code == 404) {

                modal.showModal({
                    component: <AlertMessage callBack={() => { navigate(-1, { replace: true }) }} />,

                    type: modalType.normal,
                    onAction: () => { },
                    extraaInfo: { message: 'Product not found' }
                })
            }
            return
        }
        if (resposne.data.product) {
            setproduct(resposne.data.product)
        }
        if (resposne.data.similler) {
            setsimillerProducts(resposne.data.similler)
        }
        if (resposne.data.customizations) {
            const availableCustomiation = {}
            const customizedProduct = {}
            for (let row of resposne.data.customizations) {

                if (row.parent == null) {
                    if (availableCustomiation[row.id]) {
                        availableCustomiation[row.id].parent = row
                    } else {
                        availableCustomiation[row.id] = { parent: row, data: [] }
                    }

                } else {
                    if (availableCustomiation[row.parent_id]) {

                        availableCustomiation[row.parent_id].data.push(row)
                    } else {
                        availableCustomiation[row.parent_id] = { parent: {}, data: [row] }
                    }

                    if (!customizedProduct[row.parent_id]) {
                        customizedProduct[row.parent_id] = row.id
                    }


                }
            }
            setCustomizationOfProduct(customizedProduct)
            setCustomizationList(availableCustomiation)
        }
        setLoader(false)
    }
    useEffect(() => {
        fetchProductDetails()
        setCustomizationOfProduct({})
    }, [urlParams])


    const handleCustomization = (type = "set", parent, selected_id) => {

        if (type == 'set') {
            const customizedProduct = { ...customizeProduct }
            customizedProduct[parent] = selected_id
            setCustomizationOfProduct(customizedProduct)
        } else {
            return customizeProduct[parent]
        }



    }
    const addTocart = async () => {

        if (auth.isSignedIn) {
            const product_id = product.id
            let customization_ids = Object.values(customizeProduct).join(',')

            setCartLoader(true)

            const response = await createCartApi({
                product_id,
                customization_ids
            })

            if (response.status === 1) {
                cart.addToCart(product)

                modal.showModal({
                    component: <SuccessMessage />,

                    type: modalType.normal,
                    onAction: () => { },
                    extraaInfo: {
                        message: 'Product Added to Cart'
                    }
                })
            } else alert(response.message)
            setCartLoader(false)
        } else {
            modal.showModal({
                component: <SigninController callBack={() => { addTocart() }} />,

                type: modalType.normal,
                onAction: () => { },
                extraaInfo: {}
            })
        }
    }
    const [rating, setRating] = useState(0)
    const rateProduct = async (val) => {

        if (auth.isSignedIn) {
            const productData = { ...product }
            setRating(val)

            productData['total_views'] = productData['total_views'] + 1
            if (!productData['rating']) {
                productData['rating'] = 0
            }
            productData['rating'] = ((parseFloat(productData['rating']) * (productData['total_views'] - 1)) + parseFloat(val)) / productData['total_views']

            setproduct(productData)
            await rateProductApi({ product_id: product.id, value: val })

        } else {
            modal.showModal({
                component: <SigninController callBack={() => { rateProduct(val) }} />,

                type: modalType.normal,
                onAction: () => { },
                extraaInfo: {}
            })
        }

    }
    return (
        <ProductDetails cartLoader={cartLoader} addTocart={addTocart} rating={rating} rateProduct={rateProduct} customizeProduct={customizeProduct} customization={customizationList} similllerProducts={similllerProducts} product={product} handleCustomization={handleCustomization} loader={loader} />
    )
}
export default ProductDetailsController