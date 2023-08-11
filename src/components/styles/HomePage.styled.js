import styled from 'styled-components'

export const StyledHomePage = styled.div`

 @media (max-width: 600px){
        flex-direction: column;
        font-size: 50%;
 
    }
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 1fr;
    background-color: "#FFEFD5";
}

.text-content{
    text-align: center;
    font-size: 250%;
    resize: both;
    overflow: auto;
}
.flow {
    position: relative;
}

img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.flow:hover>img {
  opacity: 0.3;
}

.flow:hover .middle {
  opacity: 1;
}
.text{
    font-family: 'DM Serif Display', serif;
}

h4{
    font-family: 'DM Serif Display', serif;
    margin-bottom: 0px;
    font-weight: 50;
}

button {
    margin-bottom: 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 900;
    padding: 5px 8px;
    background-color: #000000;
    color: FloralWhite;
}

button:hover{
    transform: scale(1.1);
}
`