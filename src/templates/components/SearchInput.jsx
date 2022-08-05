import {  useState } from "react"
import RemoveIcon from "./svg/RemoveIcon"
import SearchIcon from "./svg/SearchIcon"

const SearchInput = ({ ...props }) => {
    const [inputVisiblity, setInputVisiblity] = useState(false)



    return <div className="df row row-center search flex-end">
        {inputVisiblity && <input type="text"  {...props} className="df flex-1 h3 border-b-1 pl-5 pt-6 pb-5 pr-5 " autoFocus placeholder="Search" />}
        <button className="icon-svg pointer " onClick={()=>{setInputVisiblity(!inputVisiblity)}} style={{ flex: "none" }}>
            {inputVisiblity ? <RemoveIcon /> : <SearchIcon {...props} />
            }
        </button>

    </div>
}
export default SearchInput