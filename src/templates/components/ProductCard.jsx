import { Link, useLocation } from "react-router-dom"
import StartRating from "./StarRating"

const ProductCard = ({ item ,hideRating}) => {
    const { pathname } = useLocation()

    return (
        <div className="grid-box-3">
            <Link to={pathname +"/"+ item.slug} className="df fit-content column  p-relative">
                <div className="df row p-relative p-100">
                    <img src={item.image} className="df bg-3 fit-content p-absolute" alt="" />
                </div>
                <div className="df row flex-1 column space-between">
                    <h1 className="df bold-500 h1 mt-5 text-dark">{item.name}</h1>
                    <div className="df row row-center mt-6">
                        <span className="df bold-600 h3 text-dark row-center">RS. {item.price}</span>
                        {!hideRating &&<div className="df flex-end flex-1 mlr-2">
                            <StartRating value={item.rating ? item.rating : 0} />
                        </div>}
                    </div>
                </div>



            </Link>
        </div>
    )
}
export default ProductCard