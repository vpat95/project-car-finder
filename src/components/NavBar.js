import {NavLink} from 'react-router-dom'
import {StyledNavBar} from './styles/NavBar.styled'

function NavBar(){
    const activeStyle = {
        border: '3px solid white',
        padding: '3px'
    }


    return(
        <StyledNavBar>
            <div className='company'>
                <p>PROJECT CAR FINDER</p>
            </div>
            <div className='links'>
                <NavLink 
                    exact
                    to='/'
                    activeStyle={activeStyle}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/browse'
                    activeStyle={activeStyle}
                >
                    Browse
                </NavLink>
                <NavLink 
                    to='/favorites'
                    activeStyle={activeStyle}
                >
                    Watchlist
                </NavLink>
                <NavLink 
                    to='/upload'
                    activeStyle={activeStyle}
                >
                    List Vehicle
                </NavLink>
            </div>
        </StyledNavBar>
    )
}

export default NavBar