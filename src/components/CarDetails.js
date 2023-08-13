import React, {useState, useEffect} from "react"
import { useParams} from 'react-router-dom'
import StyledContainer from "./styles/Container.styled"

function CarDetails(){
    const {id} = useParams()
    const [car, setCar] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/cars/${id}`)
        .then(r => r.json())
        .then(data => setCar(data))
    },[id])

    if (!car) return <h2>Loading...</h2>
    if (Object.keys(car).length === 0) return <h2 style={{color: 'red'}}>Invalid Parameter</h2>

    function handleSubmit(e){
        e.preventDefault()
        setSubmitted(true)

    }



    return (
        <StyledContainer>
            <div className="detailedCard">
                <img src={car.image} alt={car.make + car.model}></img>
                <div className="info">
                    <div className="stats">
                        <h4>Make: {car.make}</h4>
                        <h4>Model: {car.model}</h4>
                        <h4>Year: {car.year}</h4>
                        <h4>Price: ${car.price.toLocaleString()}</h4>
                    </div>
                    </div>
                    <div className="Summary">
                        <h3>{car.summary}</h3>
                    </div>
                    <hr></hr>
                <div className="footer">
                    {!submitted ? (
                    <>
                        <p>Please provide us with your contact information and we will contact you promptly!</p>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Name">
                                </input><input type="text" placeholder="Email"></input>
                                <input type="text" placeholder="Phone"></input>
                                <input type="submit"></input>
                            </form>
                    </>
                                )
                    :
                        <h4>We will be reaching out soon!</h4>}
                </div>
            </div>
        </StyledContainer>
    )
}

export default CarDetails