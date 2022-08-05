import { useContext, useEffect, useState } from "react"
import { getcustomizesApi } from "../../../apis/customizesApi"

import { AuthContext } from "../../../hooksAndProviders/AuthContextProvider"
import ListCostomizesPage from "../../../templates/pages/admin/customizes/ListCostomizesPage"


const ListCustomizesController = () => {
    const auth = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState({})
    const fetchProduct = async () => {
        setLoading(true)
        const response = await getcustomizesApi({ userId: auth.user.id, all: true })
        if (response.status == 1) {
            const customize = {}
            const data = response.data
            if (data && Array.isArray(data)) {
                data.forEach((item, index) => {
                    
                    if (!customize['product_id_'+item.product_id]) {
                        customize['product_id_'+item.product_id] = {
                            product: { id: item.product_id, name: item.product_name, image: item.image },
                            data: {}
                        }
                    }

                    if (item.parent_id == 0) {
                        if (!customize['product_id_'+item.product_id].data[item.id]) {
                            customize['product_id_'+item.product_id].data[item.id] = {
                                parent: item,
                                data: []
                            }
                        } else {
                            customize['product_id_'+item.product_id].data[item.id]['parent'] = item
                        }
                    } else {
                        if (!customize['product_id_'+item.product_id]['data'][item.parent_id]) {
                            customize['product_id_'+item.product_id]['data'][item.parent_id] = {
                                parent:{},
                                data: []
                            }
                        }
                        
                        customize['product_id_'+item.product_id]['data'][item.parent_id].data.push(item)

                    }
                    
                    

                })
            }
            
            setList(customize)
            
        } else {
            alert(response.message)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    
    return(
        <ListCostomizesPage loader={loading} list={list} />
    )
    // return (
    //     <>
    //         <ListCustomiz loader={loading} list={list} />
    //     </>
    // )
}
export default ListCustomizesController