import styled from 'styled-components'

export const StyledNavBar = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 1%;

    color: white;
    

    @media (max-width: 600px){
        font-size: 60%;
 
    }
    
    .links{
        margin: auto;
        margin-right: 1%;
        justify-content: right;
    }


    a {
        color:white;
        margin: 10px;
        text-decoration: none;
        font-weight: 600;
        
    }

    a:hover {
        font-size: 120%;
        font-weight: 1000;
    }

`
