import Be from "./socialmediaIcon/Be"
import FaceBook from "./socialmediaIcon/FaceBook"
import LinkedIn from "./socialmediaIcon/LinkedIn"
import Medium from "./socialmediaIcon/Medium"

const TeamCard = ({data})=>{
    return(
        <>
            <div className="df flex-1 grid-box">
                <div className="df row p-relative column shadow-1 bg-light team-card">
                    <div className="df p-relative p-100">
                        <img style={{objectFit:"cover"}} src={data.img} className="p-absolute fit-content" alt="" />
                    </div>
                    <h1 className="df h1 bold-500 mt-5 row center pl-6 or-6">{data.name}</h1>
                    <h2 className="df h2 bold-400 mt-6 row center pl-6 or-6">{data.role}</h2>

                    <div className="df row center mt-5 mb-3">
                        {data.fb && <FaceBook href={data.fb} />}
                        {data.linkedin && <LinkedIn href={data.linkedin} />}
                        {data.medium && <Medium href={data.medium} />}
                        {data.nba && <FaceBook />}
                        {data.be && <Be href={'data.be'} />}
                    </div>
                </div>
            </div>
        
        </>
    )
}   
export default TeamCard