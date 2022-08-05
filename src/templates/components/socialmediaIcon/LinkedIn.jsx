import Icon from '../../../assets/images/linkedin.png'
const LinkedIn = ({href}) => {
    return (
        <>
            <a className='social-icon pointer' target={"_blank"}  rel="noreferrer" href={href} >

                <img src={Icon} className="df fit-content" alt="" />
            </a>

        </>
    )
}
export default LinkedIn