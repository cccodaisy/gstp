import React from "react";
import styled from "styled-components";

const SlideBox = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    position: relative;
`

const RoomImg = styled.div`
    flex: 4;
    background: url(${props => props.bgImg}) no-repeat center;
    background-size: 100%;
    width: 690px;
    height: 680px;
`

const RoomInfo = styled.div`
    flex: 3;
    font-size: 1.4em;
    position: relative;
    width: 710px;
    height: 680px;
    h3{
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
        margin: 0 9%;
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
        transition: background-color 0.3s linear;
        &:hover{
          background-color: #ebeb14;
        }
    }
`

export default function Slide({ bgImg, title, desc, href }) {
  return (
    <SlideBox>
        <RoomImg bgImg={bgImg} />
        <RoomInfo>
            <h3>{title}</h3>
            <div>
                {desc}
            </div>
            <a href={href}>
                <span className="more">더보기 > </span>
            </a>
        </RoomInfo>
    </SlideBox>
  );
}