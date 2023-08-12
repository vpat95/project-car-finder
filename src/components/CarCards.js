import {Link} from 'react-router-dom'
import StyledButton from './styles/Button.styled';

function CarCards ({car, onHeartClick, onDeleteClick}){
    const {id, make, model, year, price, image, favorited} = car;

    function handleClick(){
        onHeartClick(id, car)
    }
    
    function handleDeleteClick(){
        onDeleteClick(id)
    }

    return (
        <div className="card">
            <img src={image} alt={make+model+year} ></img>
            <div className='middle'>
                <Link to={`/browse/${id}`}>View More Details</Link>
            </div>
            <div className="details">
                <h4>{year} {make} {model}</h4>
                <h4>Price: ${price.toLocaleString()}</h4>
                <span onClick={handleClick}>{favorited ? '♥' : '♡'}</span>
                <StyledButton onClick={handleDeleteClick}>Sold</StyledButton>
                </div>
        </div>
    )
}

export default CarCards