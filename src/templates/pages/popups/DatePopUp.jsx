import { gateDateAfterdays } from "../../../helpers/helper"

const DatePopUp = ({date,setDate,onSubmit}) => {

    return (
        <div className=" radius-1 p-1 column row " style={{ maxHeight: "100%" }}>
            <div className="bg-light row p-3 overflow-y-scroll" style={{ maxHeight: "100%" }}>
                <form onSubmit={onSubmit} action="" className="df row column">

                    <h1 className="h1 bold-500 df">Select Delivery Date</h1>

                    <input type={'date'}  min={gateDateAfterdays(5)} value={date} onChange={(e)=>{setDate(e.target.value)}} name="" className="mt-3 mb-3 p-6 pt-5 pb-5 df row h2 " id="" rows="6"></input>

                    <button className="df row center bg-dark p-5 text-light h2 pointer">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}
export default DatePopUp