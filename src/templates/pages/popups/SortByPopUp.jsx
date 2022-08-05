import { useContext, useEffect, useState } from "react"
import { CustomPopUpModalContext } from "../../../hooksAndProviders/CustomPopUpModalProvider"


const SortByPopUp = ({order_by,onValueChange}) => {
    const modal = useContext(CustomPopUpModalContext)
    const [orderBy,setOrderBy] = useState(order_by)
    const sortableFilter = [{
        title: 'High to low price',
        value: 'price_desc'
    },
    {
        title: ' Low to High price',
        value: 'price_asc'
    },

    {
        title: ' oldest First',
        value: 'created_at_asc'
    }
        , {
        title: ' Newest first',
        value: 'created_at_desc'
    }
    ]
useEffect(()=>{
    if(orderBy!=order_by){
        onValueChange(orderBy)
        modal.hideModal()
    }
    
},[orderBy])
    return (
        <div className=" radius-1 p-1 column row " style={{ maxHeight: "100%" }}>
            <div className="bg-light row p-3 overflow-y-scroll" style={{ maxHeight: "100%" }}>
                <form action="" className="df row column">

                    <h1 className="h1 bold-500 df">Sort By</h1>

                    <ul className="df row column mt-3 mb-3">
                        
                        {sortableFilter.map((item,key)=>{
                            return <li  index={key}  onClick={()=>{setOrderBy(item.value)}} className={`df row p-5 h2 bold-500 pointer mb-6 hoverable ${item.value==orderBy?'bg-2':'bg-light'}`}>{item.title}</li>
                        })
                       
                       }
                    </ul>

                    {/* <button className="df row center bg-dark p-5 text-light h2 pointer">
                        Submit
                    </button> */}
                </form>
            </div>

        </div>
    )
}
export default SortByPopUp