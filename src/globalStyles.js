import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }

`

export default GlobalStyle;

//https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
//https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x