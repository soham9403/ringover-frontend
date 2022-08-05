import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductBySlugApi } from "../../apis/productApi"
import { CustomPopUpModalContext, modalType } from "../../hooksAndProviders/CustomPopUpModalProvider"
import AlertMessage from "../../templates/components/AlertMessage"
import SuccessMessage from "../../templates/components/SuccessMessage"
import SortByPopUp from "../../templates/pages/popups/SortByPopUp"
import ProductList from "../../templates/pages/product/ProductList"



const ProductListController = () => {
    const modal = useContext(CustomPopUpModalContext)
    const [productLoader, setProductLoader] = useState(false)
    const [filtersLoader, setfiltersLoader] = useState(false)
    const urlParams = useParams()
    const navigate = useNavigate()
    const defaultFilters = {
        sub_category: [],
        colors: [],
        start_price: 0,
        end_price: 0,
        order_by: 'created_at_asc',
        search: '',

    }
    const [filters, setFilters] = useState(defaultFilters)

    const [costs, setCosts] = useState([{
        title: "RS. 1500-4000",
        value: {
            start: '1500',
            end: '4000'
        }
    },
    {
        title: "RS. 4000-7000",
        value: {
            start: '4000',
            end: '7000'
        }
    },
    {
        title: "RS. 7000+",
        value: {
            start: '7000',
            end: '-1'
        }
    }

    ])
    const [category, setCategory] = useState({})
    const [colors, setColor] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        setProductLoader(true)
        const filtersInstance = { ...filters }
        const params = {
            slug: urlParams.category_slug,
            order_by: filtersInstance.order_by,
            search: filtersInstance.search
        }
        if (filtersInstance.colors.length > 0) {
            params['colors'] = JSON.stringify(filtersInstance.colors)
        }
        if (filtersInstance.sub_category.length > 0) {
            params['sub_category'] = JSON.stringify(filtersInstance.sub_category)
        }

        if (filtersInstance.start_price > 0) {
            params['start_price'] = filtersInstance.start_price
        }
        if (filtersInstance.end_price > 0) {
            params['end_price'] = filtersInstance.end_price
        }


        if ((subCategory && subCategory.length > 0) || (colors && colors.length > 0)) {

            params['only_products'] = true
        } else {
            setfiltersLoader(true)
        }


        const resposne = await getProductBySlugApi(params)
        if (resposne.status != 1) {
            if (resposne.code == 404) {
                navigate(-1)
                modal.showModal({
                    component: <AlertMessage />,

                    type: modalType.normal,
                    onAction: () => { },
                    extraaInfo: { message: 'Category not found not found' }
                })
            }
            return
        }
        if (resposne.data.colors) {
            setColor(resposne.data.colors)
        }
        if (resposne.data.subCategories) {
            setSubCategory(resposne.data.subCategories)
        }
        if (resposne.data.products) {
            setProducts(resposne.data.products)

        }
        if (resposne.data.category) {
            setCategory(resposne.data.category)
        }
        setProductLoader(false)
        setfiltersLoader(false)
    } 
    useEffect(() => {
        fetchProducts()
    }, [filters])
    const openSortByPopUp = () => {
        modal.showModal({
            component: <SortByPopUp order_by={filters.order_by} onValueChange={(val) => { setFilters({ ...filters, order_by: val }) }} />,

            type: modalType.normal,
            onAction: () => { },
            extraaInfo: {}
        })
    }
    const resetFillters = () => {
        setFilters(defaultFilters)
    }

    const handleFilter = (type = "set", filter, value) => {

        if (filter == 'search') {
            if (type == 'set') {
                setFilters({ ...filters, search: value })
            } else {
                return filters.search
            }

        }
        if (filter == 'costs') {
            if (type == 'set') {
                setFilters({ ...filters, start_price: value.start, end_price: value.end })
            } else {
                return {
                    start: filters.start_price,
                    end: filters.end_price
                }
            }

        }

        if (filter == 'colors') {
            if (type == 'set') {
                const colors = { ...filters }.colors
                const eleIndex = colors.indexOf(value)
                if (eleIndex == -1) {
                    colors.push(value)
                } else {
                    colors.splice(eleIndex, 1)
                }
                setFilters({ ...filters, colors })
            } else {
                return filters.colors
            }

        }

        if (filter == 'subcategory') {
            if (type == 'set') {
                const sub_category = { ...filters }.sub_category
                const eleIndex = sub_category.indexOf(value)
                if (eleIndex == -1) {
                    sub_category.push(value)
                } else {
                    sub_category.splice(eleIndex, 1)
                }
                setFilters({ ...filters, sub_category })
            } else {
                return filters.sub_category
            }

        }

    }
    return (
        <ProductList resetFillters={resetFillters} category={category} handleFilter={handleFilter} costs={costs} productLoader={productLoader} products={products} filtersLoader={filtersLoader} colors={colors} subCategory={subCategory} openSortByPopUp={openSortByPopUp} />
    )
}
export default ProductListController