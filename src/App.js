//hooks
import {Route, Switch} from 'react-router-dom'
import {useState, useEffect} from 'react'
//styles
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/Global';
//components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BrowseCars from './components/BrowseCars';
import Favorites from './components/Favorites';
import UploadCar from './components/UploadCarForm';
import CarDetails from './components/CarDetails';


const theme = {
  colors: {
    header: 'black',
    body: '#FFEFD5',
    footer: '#003333'
  },
  textAlign: {
    header: 'right',
    body: 'center'
  }
}

function App() {
  const [cars, setCars] = useState([])
  const [renderOnClick, setRenderOnClick] = useState(true)

    useEffect(()=>{
      fetch(`${process.env.REACT_APP_API_URL}/cars`)
      .then(r => r.json())
      .then(data => setCars(data))
  },[setCars])


  function handleHeart (id, car){

    fetch(`${process.env.REACT_APP_API_URL}/cars/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...car, favorited: !car.favorited})
    })
    .then(r => r.json())
    .then(data => setCars(cars.map(car => car.id !== id ? car: data)))

    setRenderOnClick(() => !renderOnClick)
}

function handleDelete(id){
  fetch(`${process.env.REACT_APP_API_URL}/cars/${id}`,{
    method: 'DELETE',
  })
  setCars(cars.filter(car => car.id !== id))
  setRenderOnClick(() => !renderOnClick)

}


  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
          <NavBar />
          <Switch>
          <Route path ='/browse/:id'>
              <CarDetails cars={cars} setCars={setCars}/>
            </Route>
            <Route exact path ='/browse'>
              <BrowseCars cars={cars} setCars={setCars} onHeartClick={handleHeart} onDeleteClick={handleDelete}/>
            </Route>
            <Route path ='/favorites'>
              <Favorites cars={cars} onHeartClick={handleHeart} onDeleteClick={handleDelete}/>
            </Route>
            <Route path ='/upload'>
              <UploadCar cars={cars} setCars={setCars} />
            </Route>
            <Route exact path ='/'>
              <HomePage />
            </Route>
            <Route path ='*'>
              <h2>Error 404</h2>
            </Route>
          </Switch>
    </ThemeProvider>
  );
}

export default App;
