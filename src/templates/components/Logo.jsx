import LogoImage from './../../assets/images/websitelogo.png'
const Logo = ({bg}) => {
    if(bg){
       return <img src={LogoImage} style={{objectFit:"contain"}} className="df fit-conent" alt="" />
    }
    return (
        <div className="logo">
            <img src={LogoImage} className="df row" alt="" />
        </div>
    )
}
export default Logo