const FilterInput = ({ checked, title, onValueChange, type, color, image }) => {
    if (type === 'color') {
        return <div className={`df pointer color-filter ${checked ? 'color-filter-active' : ''}`} style={{ background: color }} onClick={() => { onValueChange(!checked) }}>

        </div>
    }
    if (type == 'customization') {
        return  <button className={`df fit-content pointer p-relative p-100 ${checked ? 'filter-active' : ""}`} onClick={() => {
            onValueChange(!checked)
        }}>
            {image && image != '' && <img className="fit-content p-absolute" src={image} alt="" title={title} />}
            {(!image || image == '') && <span className="fit-content p-absolute df h3 text-1 center bold-500 border-1" alt=""  >{title}</span>}
        </button>
        
    }
    return (
        <div className="df row mt-6 row-center pointer" onClick={() => { onValueChange(!checked) }}>
            <div className={`checkbox border-1 bg-light ${checked ? ' checkbox-active' : ""}`}></div>
            <span className="df flex-1 h3 ml-5 bold-500">{title}</span>
        </div>
    )
}
export default FilterInput