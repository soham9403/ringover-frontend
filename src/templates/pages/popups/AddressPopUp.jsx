const AddressPopUp = ({ setAddrres,onSubmit, address }) => {
    return (
        <div className=" radius-1 p-1 column row " style={{ maxHeight: "100%" }}>
            <div className="bg-light row p-3 overflow-y-scroll" style={{ maxHeight: "100%" }}>
                <form onSubmit={onSubmit} action="" className="df row column">

                    <h1 className="h1 bold-500 df">Address</h1>

                    <textarea name="" value={address} onChange={e => { setAddrres(e.target.value) }} className="mt-3 mb-3 p-6 df row h2 " id="" rows="6"></textarea>

                    <button className="df row center bg-dark p-5 text-light h2 pointer">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}
export default AddressPopUp