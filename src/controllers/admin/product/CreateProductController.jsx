import { useContext, useEffect, useState } from "react"
import { getCategories } from "../../../apis/categoriesApi"
import { getColorsApi } from "../../../apis/colorsApi"
import { createProductApi } from "../../../apis/productApi"
import { AuthContext } from "../../../hooksAndProviders/AuthContextProvider"
import CreateProduct from "../../../templates/pages/admin/product/CreateProduct"
import {useNavigate} from 'react-router-dom'
const CreateProductController = () => {

    const [loading, setLoading] = useState(false)
    const auth = useContext(AuthContext)
    const [values, setValues] = useState({ name: '', slug: '', creator_id: auth.user.id, image: null, category_id: '', color_id: '', price: "", err: '' })

const navigate = useNavigate()
    const handleValues = (method = "set", filedName, value = "") => {
        if (method === "set") {
            const currentData = { ...values }
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
        if (values.price === "") {
            handleValues('set', 'err', 'name is required')
            return 0
        }
        if (values.slug === "") {
            handleValues('set', 'err', 'slug is required')
            return 0
        }
        if (values.category_id === "") {
            handleValues('set', 'err', 'Select Category')
            return 0
        }
        if (values.color_id === "") {
            handleValues('set', 'err', 'Select color')
            return 0
        }
        if (values.image == null) {
            handleValues('set', 'err', 'Select Image')
            return 0
        }
        setLoading(true)
        const productData = { ...values }
        
        const formData = new FormData()
        formData.append('image',productData.image)
        formData.append('name',productData.name)
        formData.append('price',productData.price)
        formData.append('color_id',colors[productData.color_id].id)
        formData.append('category_id',categories[productData.category_id].id)
        formData.append('creator_id',productData.creator_id)
        formData.append('slug',productData.slug)
        const response = await createProductApi(formData)

        if (response.status === 1) {

            navigate('/admin/get-product')
            
        } else {
            handleValues('set', 'err', (response.data.error))
        }
        setLoading(false)
    }



    const [colors, setColors] = useState([])
    const [categories, setCategories] = useState([])
    const fetchInfo = async () => {
        setLoading(true)
        const response = await Promise.all([
            getColorsApi(), getCategories({ all: true })
        ])
        setCategories(response[1].data)
        setColors(response[0].data)
        setLoading(false)
    }
    
    useEffect(() => {
        fetchInfo()
    }, [])
    return (
        <CreateProduct colors={colors} categories={categories} onSubmit={onSubmit} loading={loading} handleValues={handleValues} />
    )
}
export default CreateProductController