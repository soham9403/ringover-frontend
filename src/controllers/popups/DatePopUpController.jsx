import { useContext, useState } from "react"
import { CustomPopUpModalContext } from "../../hooksAndProviders/CustomPopUpModalProvider"
import DatePopUp from "../../templates/pages/popups/DatePopUp"


const DatePopUpController = ({ value, onChange }) => {

    const [date, setDate] = useState(value)
    const modal = useContext(CustomPopUpModalContext)
    const onSubmit = (e) => { e.preventDefault(); onChange(date); modal.hideModal() }
    return (
        <DatePopUp onSubmit={onSubmit} setDate={setDate} date={date} />
    )
}
export default DatePopUpController