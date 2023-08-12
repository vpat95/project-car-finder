import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import StyledContainer from "./styles/Container.styled"

function UploadCar({cars, setCars}){
    const history = useHistory()
    const [newCar, setNewCar] = useState({
        make: '',
        model: '',
        year: '',
        image: '',
        price: '',
        summary: '',
        favorited: false
    })

    function handleFormChange(e){
        const name = e.target.name
        const value = e.target.value
  
            setNewCar({
            ...newCar,
            [name]:value
            })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://project-car-finder-data.onrender.com/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...newCar, price: parseInt(newCar.price, 10)})
        })
        .then(r => r.json())
        .then(data => setCars([...cars, data]))
        history.push("/browse")

    }
    

    return(
        <StyledContainer>
            <div className="titleAndSearch">
                <h1>List Your Vehicle</h1>
            </div>
            <div className="detailedCard">
                <h3>Saying goodbye is never easy but listing with us is. Just enter some basic information about your vehicle and allow us to take care of the rest.</h3>
                <hr></hr>
                <div className="listForm">   
                    <form onSubmit={handleSubmit}>
                        <input required onChange={handleFormChange} name='make' value={newCar.make} type="text" placeholder="Make"></input>
                        <input required onChange={handleFormChange} name='model' value={newCar.model}type="text" placeholder="Model"></input>
                        <input required onChange={handleFormChange} name='year' value={newCar.year}type="text" placeholder="Year"></input>
                        <input required onChange={handleFormChange} name='price' value={newCar.price}type="number" placeholder="Price"></input>
                        <input required onChange={handleFormChange} name='image' value={newCar.image}type="text" placeholder="Image URL"></input>
                        <input required onChange={handleFormChange} name='summary' value={newCar.summary} type="textbox" placeholder="Notes"></input>
                        <input type="submit"></input>
                    </form>
                </div>
                
                <img src="/images/goodbye.jpg" alt='car driving away' style={{maxWidth:'90%', margin:'auto', paddingTop:'5%', paddingBottom: '2%'}}></img>
            </div>
        </StyledContainer>
    )
}

export default UploadCar