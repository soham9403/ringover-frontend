
import Loader from "../../../components/Loader"
import ProductCard from "../../../components/ProductCard"


const ListProduct = ({loader, products }) => {
    return (
        <div className="df row overflow-hidden pl-2 pr-2 pt-2 pb-4">
            
            <div className="df column p-4 shadow-1 ml-3 mr-3 row" >
                <h1 className="h1 bold-500 mb-5 df row row-center space-between" >
                    Products
                </h1>
                <div className="df row column flex-1 overflow-y-scroll">
                    {!loader && products.length <= 0 && <div className="df flex-1 row center"> <h1 className="h1 text-1">No Product</h1> </div>}
                    {loader ? <div className="df flex-1 center"><Loader /></div> : <div className="df row overflow-hidden">

                        <div className="grid-row df overflow-y-scroll flex-1">
                            {products && products.length > 0 && products.map((product, index) => <ProductCard key={index} item={product} />)}
                            



                        </div>
                    </div>}

                </div>
            </div>
            
        </div>
    )
}
export default ListProduct