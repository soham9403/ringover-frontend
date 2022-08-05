import Icon from '../../../assets/images/insta.svg'
const Instagram = () => {
    return (
        <>
            <a className='social-icon pointer' target={"_blank"}  rel="noreferrer" href="https://www.instagram.com/ringovergroup/?hl=fr">

                <img src={Icon} className="d fit-content" alt="" />
            </a>

        </>
    )
}
export default Instagram