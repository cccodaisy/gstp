import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 14px;
        color: #333;
        background-color: white;
        overflow-y: scroll;
    }
    h1{
        text-indent: -9999999px;
    }
`;

export default globalStyles;