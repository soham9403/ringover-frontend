import { useContext } from "react"
import { CustomPopUpModalContext } from "../../hooksAndProviders/CustomPopUpModalProvider"

const SuccessMessage = () => {
    const modal = useContext(CustomPopUpModalContext)
    return <div className=" radius-1 p-1 column row " style={{ maxHeight: "100%" }}>
        <div className="bg-light row p-3 overflow-y-scroll" style={{ maxHeight: "100%" }}>
            <div action="" className="df row column row-center">

                <h1 className="h1 bold-500 df center">{modal.modal.extraaInfo.message?modal.modal.extraaInfo.message:"Your process Succeesed"}</h1>

                <img src="https://www.freeiconspng.com/uploads/success-icon-10.png" className="w-50 mt-4 mb-4" alt="" />

                <button onClick={() => { modal.hideModal() }} className="df row center bg-dark p-5 text-light h2 pointer">
                    Okay
                </button>
            </div>
        </div>

    </div>
}
export default SuccessMessage