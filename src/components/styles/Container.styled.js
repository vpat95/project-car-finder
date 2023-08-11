import styled from 'styled-components'

const StyledContainer = styled.div`
text-align: left;
margin: 20px;
max-width: 100%;
padding-left: 60px;
padding-right: 60px;


.grid{
    display: grid;
    gap: 5%;
    grid-template-columns: repeat(3, 1fr);

}

@media (max-width: 40em){
    padding-left: 0px;
    .grid {
        grid-template-columns:  1fr;


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
    padding-bottom: 50px;
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

.buttons{
    padding:2%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

span{
    cursor: pointer;
}


`

export default StyledContainer