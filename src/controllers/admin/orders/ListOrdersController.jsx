import { useContext, useEffect, useState } from "react"
import { getcustomizesApi } from "../../../apis/customizesApi"
import { fetchOrdersApi } from "../../../apis/productApi"
import { dateConverter } from "../../../helpers/helper"

import { AuthContext } from "../../../hooksAndProviders/AuthContextProvider"
import OrderList from "../../../templates/pages/admin/orders/OrderList"



const ListOrdersController = () => {
    const auth = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState({})
    const fetchProduct = async () => {
        setLoading(true)
        const response = await fetchOrdersApi({ userId: auth.user.id, all: true })
        if (response.status == 1) {

            const data = response.data
            const orders = {}
            if (orders && Array.isArray(data) && data.length > 0) {
                data.forEach((item) => {
                    if (!orders[item.order_id]) {
                        orders[item.order_id] = {
                            value: { address: item.address, date: dateConverter({ type: "DD_MM_YYYY", value: item.date  }),customer_name: item.customer_name },
                            data: []
                        }
                    }
                    orders[item.order_id].data.push(item)

                })
            }
            setList(orders)

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
            <OrderList loader={loading} list={list} />
        </>
    )
}
export default ListOrdersController