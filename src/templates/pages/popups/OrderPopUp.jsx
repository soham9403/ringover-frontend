import { dateConverter } from "../../../helpers/helper"

const OrderPopUp = ({ orderDeatils,onSubmit }) => {
    return (
        <div className=" radius-1 p-1 column row " style={{ maxHeight: "100%" }}>
            <div className="bg-light row p-3 overflow-y-scroll" style={{ maxHeight: "100%" }}>
                <h1 className="h1 bold-500 df mb-3">Your order informaton</h1>


                <div className="df row column" action="">

                    <h2 className="h2 bold-500 df ">Name</h2>
                    <span className="df h3 bold-500 mt-6 mb-4">SOham patel</span>
                    <h2 className="h2 bold-500 df ">Delivery Address</h2>
                    <span className="df h3 bold-500 mt-6 mb-4">{orderDeatils.address}</span>
                    <h2 className="h2 bold-500 df ">Delivery Date</h2>
                    <span className="df h3 bold-500 mt-6 mb-4">{orderDeatils.date}</span>
                    <button disabled={loading} onClick={onSubmit} autoFocus className="df row center bg-dark p-5 text-light h2 pointer">
                        {loading?"Loading...":'Confirm Order'}
                    </button>
                </div>
            </div>

        </div>
    )
}
export default OrderPopUp