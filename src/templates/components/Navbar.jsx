
import LinksListUser from "./LinksListUser"
import Logo from "./Logo"
import SignInButton from "./SignInButton"

const Navbar = ({ children }) => {
    


    return (
        <div className="bg-light column  df flex-1 overflow-hidden ">
            <header className="df center row  pt-5 pb-5 ">
                <div className="container df navbar row-center space-between">


                    <Logo />
                    <LinksListUser />
                    <SignInButton />
                </div>
            </header>

            <div className="df flex-1  overflow-hidden">
                {children}
            </div>

        </div>
    )
}
export default Navbar