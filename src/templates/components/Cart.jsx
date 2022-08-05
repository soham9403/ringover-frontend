import React from "react"
import CartCard from "./CartCard"
import Loader from "./Loader"
import CalendarIcon from "./svg/CalendarIcon"
import CartIcon from "./svg/CartIcon"
import MapIcon from "./svg/MapIcon"

const Cart = ({ openAddressPopUp, openDatePopUp, openOrderNowPopUp, loading, list, removeFromCart }) => {
    return (
        <div className="df p-4 flex-1 column shadow-1">
            <h1 className="h1 bold-500 mb-5 df row space-between" >
                CART <div className="icon-svg ">
                    <CartIcon />
                </div>
            </h1>
            <div className="df flex-1 p-relative  column row align-start overflow-y-scroll">
                {/* <div className="df row flex-1 center column">
                <h3 className="df row center bold-500">CART IS EMPTY</h3>
            </div> */}
                <div className="df flex-1 row column pl-4 pr-4">

                    {loading && <div className="df row column center"><Loader /></div>}
                    {!loading && list && Object.keys(list).length > 0 && Object.keys(list).map((status) => {
                        let content;

                        if (status == 'current') {
                            {
                                content = list['current'].map((product, index) => {
                                    return <CartCard onRemove={removeFromCart} key={index} item={product} />
                                })
                            }
                        } else {
                            content = <>
                                <h1 className="h2 bold-500 pt-5">Previous Orders</h1>
                                {
                                    Object.keys(list['ordered']).map((orderId, orderIndex) => {
                                        return <div className="df column row" key={orderIndex}>
                                            <h3 className="df mt-5 mb-5 h3 bold-500">Order Id :{orderId} </h3>
                                            {
                                                list['ordered'][orderId].map((product, index) => {
                                                    return <CartCard onRemove={removeFromCart} status='ordered' key={index} item={product} />
                                                })
                                            }
                                        </div>
                                    })
                                }
                            </>
                        }
                        return <React.Fragment key={status}>{content}</React.Fragment>
                    })}

                    {!loading && list && Object.keys(list).length <= 0 && <div className="df flex-1 center"><div className="h2 bold-500">No Cart Item</div></div>}

                    {/* <CartCard item={{ image: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg", name: "ABCD EFD", creator: "by YOU AND ME ", price: "2000" }} />
                    <CartCard item={{ image: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg", name: "ABCD EFD", creator: "by YOU AND ME ", price: "2000" }} />
                    <CartCard item={{ image: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg", name: "ABCD EFD", creator: "by YOU AND ME ", price: "2000" }} />
                    <CartCard item={{ image: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg", name: "ABCD EFD", creator: "by YOU AND ME ", price: "2000" }} />
                    <CartCard item={{ image: "https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg", name: "ABCD EFD", creator: "by YOU AND ME ", price: "2000" }} /> */}

                </div>
                <div className="df column row bg-light center pt-6 sticky-bottom">
                    <div className="df row center mt-6 mb-6">
                        <button onClick={openAddressPopUp} className="df pointer row-center mr-4">
                            <div className=" icon-svg-small mr-6">
                                <MapIcon />
                            </div>
                            <h2 className="h3 text-2">Home</h2>
                        </button>
                        <button onClick={openDatePopUp} className="df pointer row-center">
                            <div className="df center icon-svg-small mr-6">
                                <CalendarIcon />
                            </div>
                            <h2 className="h3 text-2">Select Date</h2>
                        </button>
                    </div>
                    <button className="df bg-1 pointer p-6 pl-5 pr-5 h3 text-light" disabled={!list || !list['current'] || list['current'].length <= 0} onClick={openOrderNowPopUp}>Order Now</button>
                </div>
            </div>
        </div>
    )
}
export default Cart