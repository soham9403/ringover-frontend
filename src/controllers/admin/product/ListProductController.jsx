import { useContext, useEffect, useState } from "react"
import { getProductApi } from "../../../apis/productApi"
import { AuthContext } from "../../../hooksAndProviders/AuthContextProvider"
import ListProduct from "../../../templates/pages/admin/product/ListProduct"

const ListProductController = () => {
    const auth = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const fetchProduct = async () => {
        setLoading(true)
        const response = await getProductApi({ userId: auth.user.id })
        if (response.status == 1) {
            setList(response.data)
        } else {
            alert(response.message)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <>
            <ListProduct loader={loading} products={list} />
        </>
    )
}
export default ListProductController