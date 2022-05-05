import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        width: 100%;
        height: 100vh;
        background-color: var(--color-5);
        font-family: 'Koulen', cursive;
    }

    :root{
        --color-1: #707070;
        --color-2: #332424;
        --color-3:#000000;
        --color-4:#800000;
        --color-5:#B8B8B8;
        --text-button: #FFFAF0;
        --button-hover: #CD0000;
    }
`;
