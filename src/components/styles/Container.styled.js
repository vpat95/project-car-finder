import styled from 'styled-components'

const StyledContainer = styled.div`
text-align: left;


.grid{
    display: grid;
    gap: 5%;
    grid-template-columns: repeat(3, 1fr);
    padding: 5%;
    padding-top: 1%;
    margin: 5%;
    margin-top: 1%;

}

@media (max-width: 700px){
    padding-left: 0px;
    .grid {
        grid-template-columns:  1fr;
    }
    form{
        flex-direction: column
    }
}

.card img {
    width: 100%;
    height: auto;
}

.details{
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.card {
    max-width:500px;
    padding-top: 20px;
    background-color: #fff2de;
    box-shadow: 1px 1px 10px black;  
    border-radius: 5px;  
    padding-right: 20px;
    padding-left: 20px;    
}

button:hover{
    transform: scale(1.1);
}


.titleAndSearch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    margin-left:5%;
    margin-right: 5%;
}

input{
    height: 30px;
    width: 300px;
    font-size: 1.05em;
    background-color: #FFEFD5;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid;
    color:black;
    font-weight: 600;
    margin: 20px;
}
input:focus{
    outline:none
}

select{
    height: 30px;
    font-size: 1.05em;
    background-color: #FFEFD5;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid;
    color:black;
    font-weight: 600;
    margin: 20px;
}
select:focus{
    outline:none;
}

span{
    cursor: pointer;
}

.card {
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

.card:hover>img {
  opacity: 0.3;
}

.card:hover .middle {
  opacity: 1;
}
a {
    font-family: 'DM Serif Display', serif;
    cursor: pointer;
    text-decoration: none;
    color: black;
}

.detailedCard{
    height:50%;
    width:50%;
    background:  #fff2de;
    padding: 1%;
    border: 1 px solid white;
    border-radius: 5px;
    justify-content: center;   
    margin:auto;
    text-align: center;
    box-shadow: 1px 1px 10px black;  
    margin-top: 2%;

}

.detailedCard .footer>form>input{
    background-color: #fff2de;
}
p{
    color:gray;
}
.stats{
    display:flex;
    justify-content: space-around;
}

form{
    display:flex;
}


.listForm>form>input{
    background-color: #fff2de;
}

form>input[type=submit]{
    color: black;
    border: solid black;
    height: 2.2rem;
}

h3{
    color:gray;
}
hr{
    border-top: 2px solid black;
    width: 90%;
}
.listForm > form{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
`

export default StyledContainer