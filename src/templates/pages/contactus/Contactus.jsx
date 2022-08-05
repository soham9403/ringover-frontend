import LineBg from '../../../assets/images/linebg.png'
import FaceBook from '../../components/socialmediaIcon/FaceBook'
import Instagram from '../../components/socialmediaIcon/Instagram'
import Twitter from '../../components/socialmediaIcon/Twitter'
const ContactUs = () => {
    return (
        <>
            <div className="df flex-1 column  overflow-y-scroll">
                <div className="fit-content df column center p-relative">
                    <div className="p-absolute fit-content df center" style={{ zIndex: '0' }}>
                        <img src={LineBg} style={{ objectFit: "cover" }} className='row' alt="" />
                    </div>
                    <div className="p-2 df column shadow-1 bg-light p-relative" style={{ zIndex: "11" }}>
                        <h1 className="h1  bold-600 mb-4 ls-1">REACH US AT</h1>
                        <div className="df row mt-3 column align-start">
                            <h2 className="h1 bold-400">support@kicksup.com</h2>
                            <span className="h2 bold-400 mt-6">for any technichal support</span>
                        </div>
                        <div className="df row mt-3 column align-start">
                            <h2 className="h1 bold-400">info@kicksup.com</h2>
                            <span className="h2 bold-400 mt-6">For more information</span>
                        </div>
                        <div className="df row mt-3 column align-start">
                            <h2 className="h1 bold-400">feedback@kicksup.com</h2>
                            <span className="h2 bold-400 mt-6">To send your feedback</span>
                        </div>
                        <div className="df row mt-3 column align-start">
                            <h2 className="h1 bold-400">jobs@kicksup.com</h2>
                            <span className="h2 bold-400 mt-6">To work with us</span>
                        </div>
                    </div>
                    <div className='df row column mt-3 center p-relative' style={{ zIndex: "11" }}>
                        <h2 className='h2 mb-6 bold-400'>Stay in touch</h2>
                        <div className='df row center'>
                            <Twitter />
                            <Instagram />
                            <FaceBook />
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
export default ContactUs