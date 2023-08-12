import {useState, useEffect} from 'react'
import CarCards from "./CarCards"
import StyledContainer from "./styles/Container.styled"

function Favorites({onHeartClick, renderOnClick, onDeleteClick}){
    const [favorites, setFavorites] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/cars')
        .then(r => r.json())
        .then(data => setFavorites(data.map(car => {
            if (car.favorited === true){
            return <CarCards key={car.id} onHeartClick={onHeartClick} car={car} onDeleteClick={onDeleteClick}/>
            }
        })))

    },[renderOnClick])
    
    if(!favorites.find(car => car))return <h2 style={{textAlign: 'center'}}>Like some vehicles and come back!</h2>

    return(
        <StyledContainer>
            <div className="titleAndSearch">
                <h1>Favorites</h1>
            </div>
            <div className="grid">
                {favorites}
            </div>
        </StyledContainer>
        
    )
}

export default Favorites