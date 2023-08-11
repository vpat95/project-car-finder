import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap');

* {
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;

}    
    body {
        background: ${({theme}) => theme.colors.body};
        color: black;
        font-size: 1.15em;
        font-weight: 600;
        margin: 0;
    }

    p {
        opacity: 0.6;
        line-height: 1.5
    }

    img {
        max-width: 100%
    }
`

export default GlobalStyles