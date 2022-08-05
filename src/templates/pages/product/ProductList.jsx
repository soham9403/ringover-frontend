import CartController from "../../../controllers/CartController"

import FilterInput from "../../components/FilterInput"
import Loader from "../../components/Loader"
import ProductCard from "../../components/ProductCard"
import SearchInput from "../../components/SearchInput"

import FIlterIcon from "../../components/svg/FIlterIcon"


const ProductList = ({resetFillters, openSortByPopUp, category, costs, handleFilter, productLoader, products, filtersLoader, colors, subCategory }) => {
    return (
        <div className="df row overflow-hidden pl-2 pr-2 pt-2 pb-4">
            <div className="df flex-1 column p-4 shadow-1">
                <h1 className="h1 bold-500 mb-5 df row space-between" >
                    FILTERS <div className="icon-svg ">
                        <FIlterIcon />
                    </div>
                </h1>
                <div className="df flex-1 p-relative column row align-start overflow-y-scroll">
                    {filtersLoader ? <div className="df fit-conetnt center"><Loader /></div> : <>
                        <div className="df flex-1 row column">


                            <h1 className="h1 bold-500 mt-3 mb-6">COST</h1>
                            {
                                costs && costs.map((cost, index) => <FilterInput key={index} onValueChange={() => { handleFilter('set', 'costs', cost.value) }} checked={handleFilter('get', 'costs').start == cost.value.start && handleFilter('get', 'costs').end == cost.value.end} title={cost.title} />)
                            }



                            <h1 className="h1 bold-500 mt-3 mb-6">COLOR</h1>
                            <div className="df row" style={{ flexWrap: "wrap" }}>
                                {colors && colors.length > 0 && colors.map((color, index) => {
                                    return <FilterInput type={'color'} onValueChange={() => { handleFilter('set', 'colors', color.id) }} key={index} checked={handleFilter('get', 'colors').indexOf(color.id) != -1} color={color.color} />
                                })}



                            </div>


                            <h1 className="h1 bold-500 mt-3 mb-6">Category</h1>

                            {subCategory && subCategory.length > 0 && subCategory.map((category, index) => {
                                return <FilterInput key={index} onValueChange={() => { handleFilter('set', 'subcategory', category.id) }} checked={handleFilter('get', 'subcategory').indexOf(category.id) != -1} title={category.name} />
                            })}


                        </div>

                        <div className="df row bg-light center pt-6 sticky-bottom">
                            <button className="df bg-1 p-6 pl-5 pr-5 h3 text-light" onClick={resetFillters}>Reset Filters</button>
                        </div>
                    </>}
                </div>
            </div>
            <div className="df column p-4 shadow-1 ml-3 mr-3" style={{ flex: "2" }}>
                <h1 className="h1 bold-500 mb-5 df row row-center space-between" >
                    {(category && category.name) || ""}
                    <div className="df flex-1 ml-1 flex-end row-center">
                        <div className="df flex-1">
                            <SearchInput value={handleFilter('get', 'search')} onChange={(e) => { handleFilter('set', 'search', e.target.value) }} />
                        </div>
                        <div className="df ml-4  center p-relative" style={{ flex: "none" }}>
                            <button onClick={openSortByPopUp} className="df h3 pointer text-dark border-1 df center pl-4 pt-5 pb-5 pr-4 bold-800">
                                Sort By
                            </button>
                        </div>
                    </div>
                </h1>
                <div className="df row column flex-1 overflow-y-scroll">
                    {!productLoader && products.length <= 0 && <div className="df flex-1 row center"> <h1 className="h1 text-1">No Product</h1> </div>}
                    {productLoader ? <div className="df flex-1 center"><Loader /></div> : <div className="df row overflow-hidden">

                        <div className="grid-row df overflow-y-scroll flex-1">
                            {products && products.length > 0 && products.map((product, index) => <ProductCard key={index} item={product} />)}
                            



                        </div>
                    </div>}

                </div>
            </div>
            <CartController />
        </div>
    )
}
export default ProductList