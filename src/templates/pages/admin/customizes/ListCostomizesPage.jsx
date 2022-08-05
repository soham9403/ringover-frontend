
import React from "react"
import FilterInput from "../../../components/FilterInput"
import Loader from "../../../components/Loader"
import ProductCard from "../../../components/ProductCard"


const ListCostomizesPage = ({ loader, list }) => {
    return (
        <div className="df row overflow-hidden pl-2 pr-2 pt-2 pb-4">

            <div className="df column p-4 shadow-1 ml-3 mr-3 row" >
                <h1 className="h1 bold-500 mb-5 df row row-center space-between" >
                    Customizes
                </h1>
                <div className="df row column flex-1 overflow-y-scroll">
                    {!loader && list.length <= 0 && <div className="df flex-1 row center"> <h1 className="h1 text-1">No Product</h1> </div>}
                    {loader ? <div className="df flex-1 center"><Loader /></div> : <div className="df row overflow-hidden">

                        <div className="row column df overflow-y-scroll flex-1">
                            {
                                list && Object.keys(list).length > 0 && Object.keys(list).map((product, product_index) => {
                                    return <React.Fragment key={product_index}>

                                        <h1 className="df mt-5 mb-5 h2 bold-500">{list[product]['product'].name}</h1>

                                        <div className="df pl-5 row column overflow-hidden">
                                            <div className="grid-row-small df">
                                                {list[product]['data'] && Object.keys(list[product]['data']).length > 0 && Object.keys(list[product]['data']).map((parent_id, parent_cate_index) => {
                                                    return <div className="df grid-box-5 column" key={parent_cate_index}>
                                                        <h1 className="df mt-5 mb-5 h2 bold-500">{list[product]['data'][parent_id].parent.name}</h1>
                                                        <div className="df pl-5 row  column">

                                                            {list[product]['data'][parent_id]['data'] && list[product]['data'][parent_id]['data'].map((sub_customizes, index) => {
                                                                return (
                                                                    <div className="df row  row-center mt-6 mb-6" index={index}>
                                                                        <div className="mr-3 color">
                                                                            <FilterInput type={"customization"} image={sub_customizes.image} title={sub_customizes.name.split('>')[1]} />
                                                                        </div>
                                                                        <h1 className="df mt-6 mb-6 h3 bold-500">{sub_customizes.name}</h1>
                                                                    </div>

                                                                )
                                                            })}

                                                        </div>
                                                    </div>

                                                })}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                })
                            }




                        </div>
                    </div>}

                </div>
            </div>

        </div>
    )
}
export default ListCostomizesPage