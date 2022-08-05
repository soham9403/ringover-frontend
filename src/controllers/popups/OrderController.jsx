import { useContext, useState } from "react"
import { createOrderApi } from "../../apis/productApi"
import { AuthContext } from "../../hooksAndProviders/AuthContextProvider"
import { cartContext } from "../../hooksAndProviders/CartContextProvider"
import { CustomPopUpModalContext, modalType } from "../../hooksAndProviders/CustomPopUpModalProvider"
import SuccessMessage from "../../templates/components/SuccessMessage"

import OrderPopUp from "../../templates/pages/popups/OrderPopUp"

import SigninController from "./auth/SigninController"



const OrderController = ({ orderDeatils }) => {
    const [loading, setLoading] = useState(false)
    const modal = useContext(CustomPopUpModalContext)
    const { onOrderCreate } = useContext(cartContext)
    const auth = useContext(AuthContext)
    const onSubmit = async (e) => {
        if (auth.isSignedIn) {
            setLoading(true)
           
            const resposne = await createOrderApi({ ...orderDeatils })
            
            if (resposne.status == 1) {
                onOrderCreate(resposne.data.insertId)
                modal.showModal({
                    component: <SuccessMessage />,

                    type: modalType.normal,
                    onAction: () => { },
                    extraaInfo: { message: "Order registered successfully" }
                })
            } else {
                alert(resposne.message)
            }
            setLoading(false)
        } else {
            modal.showModal({
                component: <SigninController callBack={() => { onSubmit(e) }} />,

                type: modalType.normal,
                onAction: () => { },
                extraaInfo: {}
            })
        }
    }

    return (
        <OrderPopUp onSubmit={onSubmit} orderDeatils={orderDeatils} />
    )
}
export default OrderController