import { useContext, useEffect, useState } from "react"

import {  getProductApi } from "../../../apis/productApi"
import { AuthContext } from "../../../hooksAndProviders/AuthContextProvider"

import { useNavigate } from 'react-router-dom'
import CreateCustomizes from "../../../templates/pages/admin/customizes/CreateCustomizes"
import { createCustomizesApi, getcustomizesApi } from "../../../apis/customizesApi"
const CreateCustomizesController = () => {

    const [loading, setLoading] = useState(false)
    const auth = useContext(AuthContext)

    const [values, setValues] = useState({ name: '', err: '', image: null, parent_id: '', product_id: '' })

    const navigate = useNavigate()
    const handleValues = (method = "set", filedName, value = "") => {
        if (method === "set") {
            const currentData = { ...values }

            if (filedName == 'parent_id') {
                if (value == '') {
                    currentData['product_id'] = 0
                } else {
                    let i = 0;
                    for (let row of products) {

                        if (row.id == customizes[value].product_id) {
                            currentData['product_id'] = i
                            break;
                        }

                        i++
                    }
                }


            }
            currentData[filedName] = value

            setValues(currentData)
            return 0;
        } else {
            return values[filedName]
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()



        if (values.name === "") {
            handleValues('set', 'err', 'name is required')
            return 0
        }
        
        if(values.product_id===''){
            handleValues('set', 'err', 'select product')
            return 0
        }
        setLoading(true)
        const productData = { ...values }

        const formData = new FormData()
        formData.append('image', productData.image)
        formData.append('name', productData.name)
        
        formData.append('product_id', products[productData.product_id].id)

        if (productData.parent_id != '') {
            formData.append('parent_id', customizes[productData.parent_id].id)
        }



        const response = await createCustomizesApi(formData)

        if (response.status === 1) {

            navigate('/admin/get-customizes')

        } else {
            handleValues('set', 'err', (response.data.error))
        }
        setLoading(false)
    }



    const [customizes, setcustomizes] = useState([])
    const [products, setproducts] = useState([])
    const fetchInfo = async () => {
        setLoading(true)
        const response = await Promise.all([
            getProductApi({ userId: auth.user.id }),
            getcustomizesApi({ userId: auth.user.id })
        ])

        // setcustomizes(response[0].data)
        setproducts(response[0].data)
        setcustomizes(response[1].data)
        setLoading(false)
    }

    useEffect(() => {
        fetchInfo()
    }, [])
    
    return (
        <CreateCustomizes products={products} customizes={customizes} onSubmit={onSubmit} loading={loading} handleValues={handleValues} />
    )
}
export default CreateCustomizesController