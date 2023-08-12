import CarCards from "./CarCards"
import StyledContainer from "./styles/Container.styled"

function Favorites({cars, onHeartClick, onDeleteClick}){

    const favoritedCars = cars.map(car => {
            if (car.favorited === true){
            return <CarCards key={car.id} onHeartClick={onHeartClick} car={car} onDeleteClick={onDeleteClick}/>
            } else {
                return null
            }

    })


    
    if(!favoritedCars.find(car => car))return <h2 style={{textAlign: 'center'}}>Like some vehicles and come back!</h2>

    return(
        <StyledContainer>
            <div className="titleAndSearch">
                <h1>Favorites</h1>
            </div>
            <div className="grid">
                {favoritedCars}
            </div>
        </StyledContainer>
        
    )
}

export default Favorites