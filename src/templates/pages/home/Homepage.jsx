import Logo from "../../components/Logo"

const Homepage = ()=>{
    return(
        <div className="p-relative flex-1 row df center">

        <div className="p-absolute fit-content df center  send-back">
        <Logo bg={true} />
        </div>
        <h1 className='h1 bold-500 send-front'> KICKSUP</h1>
        </div>
    )
}
export default Homepage