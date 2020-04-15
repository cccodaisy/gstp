import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @font-face {
        font-family:'NanumGothic'; 
        src:url('fonts/NanumGothic.eot'); 
        src:url('fonts/NanumGothic.eot?#iefix') format(‘embedded-opentype’), 
        url('fonts/NanumGothic.woff') format(‘woff’), 
        url('fonts/NanumGothic.ttf') format('truetype'), 
        url('fonts/NanumGothic.svg') format('svg');
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'NanumGothic', sans-serif;
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