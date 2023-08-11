//hooks
import {Route, Switch} from 'react-router-dom'
//styles
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/Global';
//components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BrowseCars from './components/BrowseCars';
import Favorites from './components/Favorites';
import UploadCar from './components/UploadCarForm';


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
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
          <NavBar />
          <Switch>
            <Route path ='/browse'>
              <BrowseCars />
            </Route>
            <Route path ='/favorites'>
              <Favorites />
            </Route>
            <Route path ='/upload'>
              <UploadCar />
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
