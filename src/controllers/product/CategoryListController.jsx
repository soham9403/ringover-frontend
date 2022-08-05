import {  useEffect, useState } from "react"
import { getCategories } from "../../apis/categoriesApi"

import CategoryList from "../../templates/pages/product/CategoryList"





const CategoryListController = () => {
    
    const [loading,setLoading] = useState(false)
    const [list,setList] = useState([])
    const fetchList = async () => {
        setLoading(true)
        const response = await getCategories({})
        if(response.status==1){
            setList(response.data)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchList()
    }, [])

    return (
        <CategoryList list={list} loading={loading} />
    )
}
export default CategoryListController