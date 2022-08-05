import Star from "./svg/Star"

const StartRating = ({ value, onChange, fromStart }) => {
    return (
        <div className={`row df row-center stars ${!fromStart && ' flex-end'}`}>

            {
                [1, 2, 3, 4, 5].map((index) => {
                    if (index <= Math.floor(value)) {
                        return <button className={`${onchange ? "pointer" : ""}`} onClick={() => { if(onChange) onChange(index) }} key={index}><Star status={'full'} /></button>
                    }
                    if (index - value <= 0.5 && index - value > 0) {
                        return <button className={`${onchange ? "pointer" : ""}`} onClick={() => { if(onChange) onChange(index) }} key={index}><Star status={'half'} /></button>
                    }
                    return <button className={`${onchange ? "pointer" : ""}`} onClick={() => { if(onChange) onChange(index) }} key={index}><Star /></button>
                })
            }


        </div>
    )
}
export default StartRating