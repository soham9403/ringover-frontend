
import FileViewer from "../../../components/FileViewer"
import FilterInput from "../../../components/FilterInput"

const CreateProduct = ({ handleValues, loading, categories, colors, onSubmit }) => {

    return (
        <>
            <div className="df row column flex-1  row-center">
                <h1 className="df mt-3 bold-500 h1 mb-6">Create Product</h1>
                <span className="h3 text-danger">{handleValues('get', 'err')}</span>
                <form onSubmit={onSubmit} action="" className="df p-relative container-small column pl-1 mb-4 pr-1 pt-4 overflow-y-scroll flex-1">

                    <input
                        value={handleValues('get', 'name')}
                        onChange={e => {
                            handleValues('set', 'name', e.target.value)
                        }}
                        disabled={loading}
                        placeholder='Enter name'
                        type={'name'}
                        name='name'
                        className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 '
                        id=''
                    />
                    <input
                        value={handleValues('get', 'price')}
                        onChange={e => {
                            handleValues('set', 'price', e.target.value)
                        }}
                        disabled={loading}
                        placeholder='Enter price'
                        type={'number'}
                        name='price'
                        className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 '
                        id=''
                    />

                    <input
                        value={handleValues('get', 'slug')}
                        onChange={e => {
                            handleValues('set', 'slug', e.target.value)
                        }}
                        disabled={loading}
                        placeholder='Enter slug'
                        type={'text'}
                        name='slug'
                        className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 '
                        id=''
                    />
                    <label className="h2 mt-5" htmlFor="">Color</label>


                    <div className="df row mt-5 mb-5">
                        {colors && colors.map((color, index) => <FilterInput type={'color'} onValueChange={(val) => { if (val) handleValues('set', 'color_id', index) }} checked={handleValues('get', 'color_id') == index} color={color.color} />)}
                    </div>


                    <label className="h2 mt-5" htmlFor="">Category</label>

                    <select className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 ' name="colos" value={handleValues('get', 'category_id')}
                        onChange={e => {
                            handleValues('set', 'category_id', e.target.value)
                        }} id="">

                        {categories && categories.map((category, index) => <option className='mt-5 mb-5 p-6 pt-5 pb-5 df row h2 ' value={index} key={index}>{category.name}</option>)}
                    </select>
                    <FileViewer
                        // onDelete={onDeleteLogo}
                        onChangeFile={(files) => { handleValues('set', 'image', files[0]) }}
                        label={'Image'}
                        single={true}
                        id='product_image'
                        defaultFiles={
                            []
                        }
                    />

                    <button
                        disabled={loading}
                        className='df row sticky-bottom mt-2  center bg-dark p-5 text-light h2 pointer'
                    >
                        {loading ? "Loading..." : 'Submit'}
                    </button>
                </form>

            </div>
        </>
    )
}
export default CreateProduct