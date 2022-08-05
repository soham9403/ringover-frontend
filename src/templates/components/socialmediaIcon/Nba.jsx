import Icon from '../../../assets/images/nba.png'
const Nba = ({href}) => {
    return (
        <>
            <a className='social-icon pointer' target={"_blank"}  rel="noreferrer" href={href} >
                <img src={Icon} className="df fit-content" alt="" />
            </a>

        </>
    )
}
export default Nba