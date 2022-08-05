import { useContext, useState } from "react"
import { signInApi } from "../../../apis/authApis"
import { isEmail } from "../../../helpers/helper"
import { AuthContext } from "../../../hooksAndProviders/AuthContextProvider"
import { CustomPopUpModalContext, modalType } from "../../../hooksAndProviders/CustomPopUpModalProvider"
import SignIn from "../../../templates/pages/popups/auth/SignIn"
import SignUpController from "./SignUpController"

const SigninController = ({ callBack }) => {

    const modal = useContext(CustomPopUpModalContext)
    const auth = useContext(AuthContext)
    const onSignUpBtnClick = () => {
        modal.showModal({
            component: <SignUpController />,

            type: modalType.normal,
            onAction: () => { },
            extraaInfo: {}
        })
    }

    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({ email: '', password: '', err: '' })


    const handleValues = (method = "set", filedName, value = "") => {
        if (method === "set") {
            const currentData = { ...values }
            currentData[filedName] = value
            setValues(currentData)
            return 0;
        } else {
            return values[filedName]
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()


        if (values.email === "") {
            handleValues('set', 'err', 'email is required')
            return 0
        } else if (!isEmail(values.email)) {
            handleValues('set', 'err', 'email is invalid')
            return 0
        }

        if (values.password === "") {
            handleValues('set', 'err', 'password is required')
            return 0
        }

        setLoading(true)
        const userData = { ...values }
        delete userData['err']
        const response = await signInApi(userData)

        if (response.status === 1) {

            auth.signIn(response.data)
            if (callBack) {
                callBack()
            }
             modal.hideModal()


        } else {
            handleValues('set', 'err', (response.data.error))
        }
        setLoading(false)
    }
    return (<SignIn onSubmit={onSubmit} loading={loading} handleValues={handleValues} onSignUpBtnClick={onSignUpBtnClick} />)
}
export default SigninController