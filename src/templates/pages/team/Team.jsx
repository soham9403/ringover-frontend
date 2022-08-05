import LineBg from '../../../assets/images/linebg.png'
import zidane from '../../../assets/images/zidane.jpg'
import tonikroos from '../../../assets/images/tonikroos.jpg'
import ikercasillas from '../../../assets/images/ikercasillas.jpg'
import james from '../../../assets/images/james.jpg'
import christiano from '../../../assets/images/christiano.jpg'
import TeamCard from '../../components/TeamCard'
const Team = () => {
    const team_info = [
        {
            name: 'Zindane',
            role: 'Leadership & management',
            img: zidane,
            fb: 'https://www.facebook.com/',
            linkedin: 'https://www.linkedin.com/',
            medium: 'https://medium.com/',
            // nba:'https://www.sportingnews.com/in/nba',
            // be:'https://www.sportingnews.com/in/nba'
        },
        {
            name: 'Toni Kroos',
            role: 'Product developer',
            img: tonikroos,
            // fb:'https://www.facebook.com/',
            linkedin: 'https://www.linkedin.com/',
            medium: 'https://medium.com/',
            // nba:'https://www.sportingnews.com/in/nba',
            // be:'https://www.sportingnews.com/in/nba'
        },
        {
            name: 'Iker Casillas',
            role: 'Marketing strategy',
            img: ikercasillas,
            // fb:'https://www.facebook.com/',
            // linkedin:'https://www.linkedin.com/',
            medium: 'https://medium.com/',
            // nba:'https://www.sportingnews.com/in/nba',
            // be:'https://www.sportingnews.com/in/nba'
        },
        {
            name: 'James',
            role: 'Product designers',
            img: james,
            // fb:'https://www.facebook.com/',
            // linkedin:'https://www.linkedin.com/',
            medium: 'https://medium.com/',
            nba: 'https://www.sportingnews.com/in/nba',
            be: 'https://www.sportingnews.com/in/nba'
        },
        {
            name: 'Cristiano',
            role: 'Financial operations',
            img: christiano,
            fb: 'https://www.facebook.com/',
            linkedin: 'https://www.linkedin.com/',
            // medium:'https://medium.com/',
            // nba:'https://www.sportingnews.com/in/nba',
            // be:'https://www.sportingnews.com/in/nba'
        }
    ]
    return (
        <>
            <div className="df flex-1 column  overflow-y-scroll">
                <div className="fit-content df column center p-relative">
                    <div className="p-absolute fit-content df center" style={{ zIndex: '0' }}>
                        <img src={LineBg} style={{ objectFit: "cover" }} className='row' alt="" />
                    </div>

                    <div className='df  column row-center pl-1 pr-1 row ' style={{ maxHeight: "100%",zIndex:'1' }}>
                        <h2 className='df h1 bold-500 '>With out bonding and coordination,every project is failure. Look who makes KICKSUP great. {';)'}</h2>
                        <div className='df row mb-1 mt-1 '>
                            <div className="grid-row df ">

                                {team_info.map((data, index) => <TeamCard data={data} key={index} />)}

                            </div>
                        </div>
                        <h2 className='df h1 bold-500 '>and you! {';)'}</h2>
                    </div>


                </div>
            </div>

        </>
    )
}
export default Team