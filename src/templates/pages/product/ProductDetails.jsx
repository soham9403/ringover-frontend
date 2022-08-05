
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BackIcon from "../../components/svg/BackIcon"
import StartRating from "../../components/StarRating"
import CartController from "../../../controllers/CartController"
import Loader from '../../components/Loader'
import FilterInput from '../../components/FilterInput'
const ProductDetails = ({ loader, cartLoader, addTocart, rating, rateProduct, product, similllerProducts, customization, customizeProduct, handleCustomization }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const pathTillCategory = pathname.split('/').splice(0, 3).join('/')

    return (
        <div className="df row overflow-hidden pl-2 pr-2 pt-2 pb-4">

            <div className="df column p-4 shadow-1 ml-3 mr-3" style={{ flex: "3" }}>
                {loader && <div className='df fit-content center'><Loader /></div>}
                {
                    !loader && Object.keys(product).length > 0 &&
                    <>

                        <h1 className="h1 bold-500 mb-5 df row row-center " >
                            <button className="icon-svg pointer mr-3" onClick={() => { navigate(-1) }}>
                                <BackIcon />
                            </button>
                            Your design space

                        </h1>
                        <div className="df row column flex-1  pl-2 pr-2 overflow-hidden">

                            <div className="df row overflow-hidden flex-1 mr-2">
                                <div className="df  overflow-hidden" style={{ flex: 2 }}>
                                    <div className="df overflow-hidden bg-1" style={{ flex: 3 }}>
                                        <div className="df fit-content p-relative">
                                            {product.image && <img className="fit-content p-absolute bg-3 " style={{ objectFit: "contain" }} src={product.image} alt="" />}
                                        </div>
                                    </div>
                                    {similllerProducts && similllerProducts.length > 0 && <div className="df ml-3 column  overflow-y-scroll" style={{ flex: 1 }}>
                                        {similllerProducts.map((item, index) => <Link key={index} to={pathTillCategory + '/' + item.slug} className="df  mb-3 base-3  p-relative" style={{ paddingRight: '100%' }}>
                                            <img className="fit-content p-absolute border-1" style={{ objectFit: "contain" }} src={item.image} alt="" />
                                        </Link>)}





                                    </div>}
                                </div>
                                <div className="df flex-1 ml-3 column overflow-y-scroll">
                                    <h1 className="h1 bold-500">{product.name}</h1>
                                    <span className="h3 bold-500 mt-6">By  {product.creator} and you</span>

                                    <div className="df row mt-3">
                                        <StartRating fromStart={true} value={product.rating} />
                                    </div>
                                    <span className="h3 bold-500 mt-6">Total reviews {product.total_views}</span>

                                    <h2 className="h2 bold-500 mt-3">Rs. {product.price}</h2>
                                    <span className="h3 bold-500 mt-6 mb-3">Get an exclusive offer on HDFC</span>



                                    {
                                        customization && Object.keys(customization).length > 0 && Object.keys(customization).map((key, index) => {

                                            return (
                                                (<div className="df row row-center pt-6 pb-5 overflow-hidden" key={index}>
                                                    <h2 className="h2 df bold-500 mr-3" style={{ width: "20%" }}>{customization[key].parent.name}</h2>
                                                    <div className="df" style={{ flex: 1 }}>
                                                        <div className="grid-row-small df">
                                                            {
                                                                customization[key].data && customization[key].data.length > 0 && customization[key].data.map((item, itemindex) => {

                                                                    return (<div className={`grid-box-5 df `} key={itemindex}>
                                                                        <FilterInput type={'customization'} title={item.name} image={item.image} checked={handleCustomization('get', key) == item.id} onValueChange={(val) => {
                                                                            handleCustomization('set', key, item.id)
                                                                        }} /></div>)


                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            )
                                        })
                                    }



                                </div>
                            </div>

                        </div>
                        <div className='df row row-center pt-6'>

                            <div className="df flex-1">
                                <span className="h3 df mr-6">Rate product:</span>
                                <div >
                                    <StartRating onChange={(val) => rateProduct(val)} fromStart={true} value={rating} />
                                </div>

                            </div> <button disabled={cartLoader} className="df bg-1 pointer p-6 pl-5 pr-5 h3 text-light" onClick={addTocart}>
                                {cartLoader ? "Loading..." : 'Add to cart'}
                            </button>
                            <div className="df flex-1"></div>
                        </div>
                    </>
                }
            </div>
            <CartController />
        </div>
    )
}
export default ProductDetails