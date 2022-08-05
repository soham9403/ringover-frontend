import { useContext, useState } from "react"
import { deleteCartApi } from "../apis/productApi"
import {  gateDateAfterdays } from "../helpers/helper"
import { AuthContext } from "../hooksAndProviders/AuthContextProvider"
import  { cartContext } from "../hooksAndProviders/CartContextProvider"
import { CustomPopUpModalContext, modalType } from "../hooksAndProviders/CustomPopUpModalProvider"
import Cart from "../templates/components/Cart"
import AddressController from "./popups/AddressController"
import DatePopUpController from "./popups/DatePopUpController"
import OrderController from "./popups/OrderController"

const CartController = () => {
    const modal = useContext(CustomPopUpModalContext)
    const auth = useContext(AuthContext)
    const { data, loading, removeFromCart } = useContext(cartContext)

    const [orderDeatils, setOrderDetails] = useState({
        date: gateDateAfterdays(5),
        address: auth.isSignedIn ? auth.user.address : ""        
    })
    const openAddressPopUp = () => {
        modal.showModal({
            component: <AddressController value={orderDeatils.address} onChange={(val)=>{setOrderDetails({...orderDeatils,address:val})}} />,

            type: modalType.normal,
            onAction: () => { },
            extraaInfo: {}
        })
    }
    const openDatePopUp = () => {
        modal.showModal({
            component: <DatePopUpController value={orderDeatils.date} onChange={(val)=>{setOrderDetails({...orderDeatils,date:val})}}/>,

            type: modalType.normal,
            onAction: () => { },
            extraaInfo: {}
        })
    }
    const openOrderNowPopUp = () => {
        modal.showModal({
            component: <OrderController orderDeatils={orderDeatils} />,

            type: modalType.normal,
            onAction: () => { },
            extraaInfo: {}
        })
    }
    const constonRemoveBtnClick = async (item) => {
        removeFromCart(item)
        await deleteCartApi({ id: item.cart_product_id })
    }

    
    return (
        <>
            <Cart list={data} removeFromCart={constonRemoveBtnClick} loading={loading} openAddressPopUp={openAddressPopUp} openOrderNowPopUp={openOrderNowPopUp} openDatePopUp={openDatePopUp} />
        </>
    )
}
export default CartController