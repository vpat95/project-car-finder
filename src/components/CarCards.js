import {useState} from 'react'
import StyledButton from "./styles/Button.styled"

function CarCards ({car, onHeartClick}){
    const {id, make, model, year, price, image, favorited} = car;
    const [saved, setSaved] = useState(true)

    function handleClick(){
        onHeartClick(id, saved)
        setSaved(() => !saved)
    }



    return (
        <div className="card">
            <img style={{maxWidth: '500px'}} src={image} ></img>
            <div className="details">
                <h4>{year} {make} {model}</h4>
                <h4>Price: ${price.toLocaleString()}</h4>
                <div className="buttons">
                    <StyledButton>Details</StyledButton>
                    <span onClick={handleClick}>{favorited ? '♥' : '♡'}</span>
                </div>
                </div>
        </div>
    )
}

export default CarCards