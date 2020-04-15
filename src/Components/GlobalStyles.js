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
    section{
        width: 100%;
        &.main{
            postion: relative;
            height: 1080px;
            background: url('img-main.jpg') no-repeat center center;
            & .textbox{
                position: absolute;
                bottom: 40%;
                left: 5%;
                width: 344px;
                height: 68px;
                line-height: 68px;
                text-align: center;
                background-color: #a2c5c7;
                color: white;
                font-size: 26px;
            }
            & h2{
                position: absolute;
                bottom: 15%;
                left: 5%;
                color: white;
                font-size: 80px;
                line-height: 1.15;
                font-weight: 500;
                letter-spacing: -1px;
            }
        }
        &.rooms{
            height: 913px;
            background-color: #a2c5c7;
            display: flex;
            align-items: center;
            & .left{
                flex: 1;
                width: 24px;
                height: 70px;
                background-color: white;
            }
            & .box{
                flex: 12;
                background-color: white;
                display: flex;
                align-items: center;
                position: relative;
                & .room{
                    flex: 4;
                    background: url('banner-1.jpg') no-repeat;
                    width: 941px;
                    height: 680px;
                }
                & .info{
                    flex: 3;
                    font-size: 24px;
                    position: relative;
                    height: 680px;
                    h4{
                        font-size: 40px;
                        color: #333;
                        letter-spacing: -1px;
                        width: 80%;
                        margin: 16% 10% 6% 10%;
                        font-weight: bold;
                        margin-bottom: 70px;
                    }
                    div{
                        line-height: 1.67;
                        text-align: left;
                        width: 80%;
                        margin: 0 10%;
                    }
                    .more{
                        padding: 20px 60px;
                        text-align: center;
                        font-weight: bold;
                        color: #4d4d4d;
                        background-color: #ffff25;
                        border-radius: 2em;
                        position: absolute;
                        bottom: 12%;
                        left: 10%;
                    }
                }
            }
            & .right{
                flex: 1;
                width: 24px;
                height: 70px;
                background-color: white;
            }
        }
    }
`;

export default globalStyles;