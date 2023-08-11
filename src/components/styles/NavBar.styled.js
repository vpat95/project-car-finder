import styled from 'styled-components'

export const StyledNavBar = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 30px 0;
    text-align: ${({theme}) => theme.textAlign.header};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    color: white;

    @media (max-width: 600px){
        flex-direction: column;
        font-size: 60%;
 
    }
    
    .company>p{
        text-align: left;
        padding-left:5%;
        margin-top: 0%;
        font-weight: 900;
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
