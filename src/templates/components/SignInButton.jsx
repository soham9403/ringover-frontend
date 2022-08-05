import { useContext } from "react"
import SigninController from "../../controllers/popups/auth/SigninController"
import { AuthContext } from "../../hooksAndProviders/AuthContextProvider"
import { CustomPopUpModalContext, modalType } from "../../hooksAndProviders/CustomPopUpModalProvider"
import ProfileIcon from "./svg/ProfileIcon"

const SignInButton = () => {
    const auth = useContext(AuthContext)
    const modal = useContext(CustomPopUpModalContext)

    const onSignInBtnClick = () => {
        auth.isSignedIn ?
            auth.signOut()
            :
            modal.showModal({
                component: <SigninController />,

                type: modalType.normal,
                onAction: () => { },
                extraaInfo: {}
            })
    }


    return <button className="df  row-center" onClick={onSignInBtnClick}>
        <div className="profile-icon">
            <ProfileIcon />
        </div>
        <span className="h2 ml-6 font-2 align-start">{auth.isSignedIn ? 'Sign Out' : 'SIGN IN'}</span>
    </button>
}
export default SignInButton