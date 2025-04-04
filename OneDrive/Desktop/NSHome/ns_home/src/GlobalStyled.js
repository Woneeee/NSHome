import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const point = {};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        
    }

    body{
        color: rgb(51, 51, 51)
        ;
        font-family: "Noto Sans KR", sans-serif;
        /* word-break: keep-all; */
    }

    li{
        list-style: none;
    }

    img{
        width: 100%;
        display: block;
    }

    a{
        color: rgb(51, 51, 51);
        text-decoration: none;
    }

`;
