
import React from "react"
import FilterInput from "../../../components/FilterInput"
import Loader from "../../../components/Loader"
import ProductCard from "../../../components/ProductCard"


const OrderList = ({ loader, list }) => {
    return (
        <div className="df row overflow-hidden pl-2 pr-2 pt-2 pb-4">

            <div className="df column p-4  ml-3 mr-3 row" >
                <h1 className="h1 bold-500 mb-5 df row row-center space-between" >
                    Orders
                </h1>
                <div className="df row column flex-1 overflow-y-scroll">
                    {!loader && list.length <= 0 && <div className="df flex-1 row center"> <h1 className="h1 text-1">No Product</h1> </div>}
                    {loader ? <div className="df flex-1 center"><Loader /></div> : <div className="df row overflow-hidden">

                        <div className="row column df overflow-y-scroll flex-1">
                            {
                                list && Object.keys(list).length > 0 && Object.keys(list).map((order_id, order_index) => {
                                    console.log(order_id)
                                    return <div className="df column p-4 row shadow-1 border-1" key={order_index}>
                                        <div className="df row column">
                                            <h1 className="df mt-5 mb-5 h2 bold-500">Name: {list[order_id].value.customer_name}</h1>
                                            <h1 className="df mt-5 mb-5 h2 bold-500">Address: {list[order_id].value.address}</h1>
                                            <h1 className="df mt-5 mb-5 h2 bold-500">Delivery date: {list[order_id].value.date}</h1>
                                        </div>


                                        <div className="df pl-5 row column overflow-hidden">
                                            <div className="row  grid-row df">
                                                {
                                                    list[order_id].data && list[order_id].data.map((order, index) => {
                                                        return <div className="grid-box-3" key={index}>
                                                            <div className="row df column">
                                                                <ProductCard hideRating={true} item={order} />
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                })
                            }




                        </div>
                    </div>}

                </div>
            </div>

        </div>
    )
}
export default OrderList