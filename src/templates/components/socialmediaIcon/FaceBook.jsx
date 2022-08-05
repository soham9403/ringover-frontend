import Icon from '../../../assets/images/facebook.svg'
const FaceBook = ({href}) => {
    return (
        <>
            <a className='social-icon pointer ' target={"_blank"}  rel="noreferrer" href={href?href:"https://www.facebook.com/RingoverApp"}>

                <img src={Icon} className="d fit-content" alt="" />
            </a>

        </>
    )
}
export default FaceBook