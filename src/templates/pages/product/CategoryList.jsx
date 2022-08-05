import LineBg from '../../../assets/images/linebg.png'

import CategoryCard from '../../components/CategoryCard'
import Loader from '../../components/Loader'
const CategoryList = ({ list, loading }) => {

    return (
        <>
            <div className="df flex-1 column  overflow-y-scroll">
                <div className="fit-content df column center p-relative">
                    <div className="p-absolute fit-content df center" style={{ zIndex: '0' }}>
                        <img src={LineBg} style={{ objectFit: "cover" }} className='row' alt="" />
                    </div>

                    <div className='df  column row-center pl-1 pr-1 container ' style={{ maxHeight: "100%", zIndex: '1' }}>
                        <h2 className='df h1 bold-500 '>Choose your favourite category</h2>
                        <div className='df row mb-1 mt-1 '>
                            {!loading && <div className="grid-row df ">

                                {list && list.map((data, index) => <CategoryCard data={data} key={index} />)}

                            </div>}
                            {loading && <div className="row df center"><Loader /></div>}
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}
export default CategoryList