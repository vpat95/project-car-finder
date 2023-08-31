 import {StyledHomePage} from './styles/HomePage.styled'
 import StyledButton from './styles/Button.styled'
 import {Link} from 'react-router-dom'

 function HomePage(){
    return(
        <StyledHomePage>

                <div className="text-content">
                    <h1>We're like an animal rescue...for cars...</h1>
                    <h4>Help our cars find their forever homes</h4> 
                    <Link to='/browse'><StyledButton>View Cars</StyledButton></Link>
                </div>
                <div className='grid'>
                    <div className="flow">
                        <img src='https://res.cloudinary.com/dvya2gtov/image/upload/v1693440922/bmwOld_owsp2p.jpg' alt='unrestored BMW 3 series'/>
                        <div className="middle">
                            <div className="text">Before</div>
                        </div>
                    </div>
                    <div className="flow">
                        <img src='https://res.cloudinary.com/dvya2gtov/image/upload/v1693441028/bmwNew_ugtagk.jpg' alt='unrestored BMW 3 series'/>
                        <div className="middle">
                            <div className="text">After</div>
                        </div>
                    </div>
                </div>
        </StyledHomePage>
    )
 }


export default HomePage