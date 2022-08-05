import RemoveIcon from "./svg/RemoveIcon"

const CartCard = ({ item, onRemove,status }) => {
    return (
        <div className="df row mt-5 mb-5 ">
            <div className="df flex-1 p-relative">
                {status !="ordered" &&<button onClick={()=>{onRemove(item)}} className="p-absolute df center bg-light remove-icon">
                <RemoveIcon />
                </button>}
                <div className="df p-relative p-100 row">
                    <img src={item.image} style={{objectFit:"contain"}} className="p-absolute fit-content bg-3" alt="" />
                </div>
            </div>
            <div className="df flex-1 column pl-4  align-start" style={{justifyContent:"center"}}>
                <h1 className="h1 bold-500">{item.name}</h1>
                <span className="h3 mt-6 mb-4 bold-500">{item.creator}</span>

                <span className="h2 mt-6 mb-4 bold-500">Rs. {item.price}/-</span>
            </div>
        </div>
    )
}
export default CartCard