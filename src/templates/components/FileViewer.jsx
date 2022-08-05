import { useState } from "react"

const FileViewer = ({ label, id, defaultFiles, single, onDelete, onChangeFile }) => {
    const [files, setFiles] = useState(defaultFiles ? defaultFiles : [])
    const [objectUrls, setObjectUrls] = useState(defaultFiles ? defaultFiles : [])
    const onDeleteButtonClick = (index) => {
        const temp = [...files]
        const urls = [...objectUrls]
        const url = urls[index]
        temp.splice(index, 1)
        urls.splice(index, 1)

        if (onDelete && url.slice(0, 4) != 'blob') {
            onDelete(url.slice(9))
        }


        setFiles(temp)
        setObjectUrls(urls)
        onChangeFile(temp.filter((fileUrl) => fileUrl.slice(0, 4) != 'blob'))
    }

    const onChange = (e) => {
        const temp = [...files]
        const urls = [...objectUrls]
        if (single) {

            if (onDelete && defaultFiles && defaultFiles.length > 0) {
                onDelete(defaultFiles[0].slice(9))
            }
            
            Array.from(e.target.files).forEach(file => {
                temp[0] = file
                urls[0] = (URL.createObjectURL(file))
            })
        } else {
            
            Array.from(e.target.files).forEach(file => {
                temp.push(file)
                urls.push(URL.createObjectURL(file))
            })
        }

        setFiles(temp)
        
        onChangeFile(temp.filter((fileUrl) => fileUrl.slice(0, 4) != 'blob'))
        setObjectUrls(urls)
        document.getElementById(id ? id : "files").value = ''
    }

    return (
        <div className="df row mb-5 column">
            <label htmlFor="" className="df row h1 text-1 mt-6 mb-6 bold-500">{label}</label>

            <div className="df bg-4 radius-1 border-1 h4 text-light h1 bold-600 p-1 row center p-relative">
                upload Files
                <input accept="image/*" type="file" className="p-absolute fit-content pointer" onChange={onChange} style={{ opacity: 0 }} multiple={!single} name="files" id={id ? id : "files"} />
            </div>
            <div className="df  grid-row flex-1">
                {objectUrls.map((url, index) => {

                    return (
                        <div className="df  grid-box-3 column" key={index}>


                            <div className="df row p-relative  card-images p-100">
                                <div
                                    className=' fit-content p-absolute radius-1 bg-3'
                                    style={{ overflow: "hidden" }}
                                >
                                    <img src={url} className="radius-1 fit-content" layout='fill' />
                                </div>

                            </div>
                            <button type="button" className="mt-6 row p-6 radius-1 h2 bg-danger text-light pointer" onClick={() => { onDeleteButtonClick(index) }}>
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default FileViewer