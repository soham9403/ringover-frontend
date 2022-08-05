import grasspic from '../../../assets/images/grasspic.jpg'

const Journey = () => {
    const journey_info = [
        {
            title: 'THE ROOTS',
            values: `Our entire life when we shop, we are limited by choices that are there in a store. We are Often on the side where we buy our favourite coloured shoes made by
        someone else but what if we designed it? What if we could involve in the making of a shoe we want to buy? This little thought sprouted to become what we are
        today, KICKSUP!`
        },
        {
            title: 'CHAPTER I',
            values: `Understanding the trends in the industry and what the users think when they buy Were Our top priorities before we moved further in the building. After weeks Of
            fruitful research, we stepped into the user's shoes and 100k at what we plan to do. It's a great joy for the users if they are involved in the making. We're heading
            into an era of technology and people prefer online shopping to shopping in an outlet.`
        },
        {
            title: 'CHAPTER II',
            values: `Every milestone begins with a single step and before KICKSUP sprouted, the team manufactured in small scale with two users a month. This experience was
            crucial to our brand as this is our first practical experience. Interacting with the users was the best thing ever. The positive reviews and support from people
            motivated us to push our limits further.`
        },
        {
            title: 'KICKSUP',
            values: `Here we are, made a perfect platform for you to involve in the making Of a shoe you want to buy! We have evolved ever since we started out. We wish to help you
            more and make KICKSUP a bigger team. Design your shoe and be a part of our journey!`
        }
    ]
    return (
        <>
            <div className="df flex-1 column  row-center overflow-y-scroll">
                <div className='df container p-relative mt-1 column bg-dark flex-1'>
                    <div className='p-relative row p-30'>
                        <img src={grasspic} className='p-absolute fit-content' style={{ objectFit: "cover" }} alt="" />
                        <div className='df center p-absolute fit-content' style={{ zIndex: "11" }}>
                            <h1 className='body-1 text-light'>THE JOURNEY</h1>
                        </div>
                        <div className='df fit-content p-absolute black-gradient'>

                        </div>
                    </div>
                    <div className='df row pl-2 pr-2 pt-1 pb-1 column'>
                        {journey_info.map((data, index) => {
                            return (
                                <div className='df row column pb-2 pl-3 p-relative'>
                                    {index !== journey_info.length - 1 && <div className='df indicator-line p-absolute bg-light' style={{ height: "100%" }}>

                                    </div>}
                                    <div className='radius-circle indicator-line-idicator  p-absolute '>

                                    </div>
                                    <h1 className='h1 bold-500 text-light'>{data.title}</h1>
                                    <span className='h3 bold-400 mt-6 lh-1  text-light'>{data.values}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Journey