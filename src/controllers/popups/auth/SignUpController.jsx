import { useContext, useState } from "react"
import { signUpApi } from "../../../apis/authApis"
import { isEmail } from "../../../helpers/helper"
import { AuthContext } from "../../../hooksAndProviders/AuthContextProvider"
import { CustomPopUpModalContext, modalType } from "../../../hooksAndProviders/CustomPopUpModalProvider"

import SignUp from "../../../templates/pages/popups/auth/SignUp"
import SigninController from "./SigninController"

const SignUpController = () => {

    const modal = useContext(CustomPopUpModalContext)
    const auth = useContext(AuthContext)

    const onSignInBtnClick = () => {
        modal.showModal({
            component: <SigninController />,

            type: modalType.normal,
            onAction: () => { },
            extraaInfo: {}
        })
    }

    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({ email: '', name: "", mobile: "", address: '', password: '', err: '' })


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
        if (values.name === "") {
            handleValues('set', 'err', 'name is required')
            return 0
        }
        if (values.mobile === "") {
            handleValues('set', 'err', 'mobile is required')
            return 0
        }
        if (values.address === "") {
            handleValues('set', 'err', 'address is required')
            return 0
        }


        setLoading(true)
        const userData = { ...values }
        delete userData['err']
        const response = await signUpApi(userData)

        if (response.status === 1) {

            auth.signIn(response.data)
            modal.hideModal()
        } else {
            handleValues('set', 'err', (response.data.error))
        }
        setLoading(false)
    }

    return (<SignUp loading={loading} onSubmit={onSubmit} handleValues={handleValues} onSignInBtnClick={onSignInBtnClick} />)
}
export default SignUpController