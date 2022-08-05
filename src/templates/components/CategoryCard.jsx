
import { Link } from 'react-router-dom'
const CategoryCard = ({ data }) => {
    return (
        <>
            <div className="df  grid-box-3">
                <Link title={!data.enabled?"Comming soon":""} style={!data.enabled?{cursor:"not-allowed",filter:'blur(2px)'}:{}} to={data.enabled ? '/store/' + data.slug : "/store"} className="df row p-relative column shadow-1 bg-light ">
                    <div className="df p-relative p-100">
                        <img style={{ objectFit: "cover",zIndex:"0" }} src={data.image} className="p-absolute fit-content" alt="" />
                    </div>
                    <h1 className="df h1 bold-500 mt-5 row center pl-6 pr-6">{data.name}</h1>

                </Link>
            </div>

        </>
    )
}
export default CategoryCard