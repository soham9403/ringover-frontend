import { useContext, useState } from "react"
import { CustomPopUpModalContext } from "../../hooksAndProviders/CustomPopUpModalProvider"
import AddressPopUp from "../../templates/pages/popups/AddressPopUp"

const AddressController = ({ value, onChange }) => {
    const [address, setAddrres] = useState(value)
    const modal = useContext(CustomPopUpModalContext)
    const onSubmit = (e) => { e.preventDefault(); onChange(address); modal.hideModal() }

    return (
        <AddressPopUp onSubmit={onSubmit} setAddrres={setAddrres} address={address} />
    )
}
export default AddressController