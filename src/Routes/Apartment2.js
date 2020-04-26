import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sns from "../Components/Sns";
import Rooms from "../Components/Rooms";


const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 7% 0 0 0;
    padding-bottom: 2%;
    .inner{
        width: 1400px;
        margin: 0 auto;
        height: 100%;
      }
    & h3{
        text-align: center;
        font-size: 2.4em;
        color: #333;
        font-weight: bold;
        margin: 20px auto 7% auto;
        position: relative;
        &:after{
            content: '';
            position: absolute;
            width: 100%;
            left: -15px;
            background-color: #ffff25;
            height: 20px;
            z-index: -1;
            bottom: -8px;
            padding: 0 15px;
        }
    }
`;

const OptionInfo = styled.div`
    margin-bottom: 80px;
    h4{
        font-size: 1.5em;
        text-align: center;
        font-weight: bold;
        margin-top: 60px;
    }
    img {
        width: 60%;
        margin: 20px 20%;
    }
`

const RoomImg = styled.div`
    img{
        width: 49%;
        margin-bottom: 2%;
        &:nth-child(odd){
            margin-left: 2%;
        }
        &:first-child{
            width: 100%;
            margin-left: 0;
        }
    }
`

function Apartment2(props){
    // console.log(props);
    return (
        <>
            <Section>
                <h3>원룸 타입별 안내</h3>
                <Rooms/>
                <div className="inner">
                    <OptionInfo>
                        <h4>옵션</h4>
                        <img src="../images/img-option-nobed.png" alt="옵션이미지"/>
                        <h4>보안 시설</h4>
                        <img src="../images/img-security.png" alt="보안이미지"/>
                    </OptionInfo>
                    <RoomImg>
                        <img src="../images/img-option-nobed-1.jpg" alt="침대없는 원룸 이미지1"/>
                        <img src="../images/img-option-nobed-2.jpg" alt="침대없는 원룸 이미지2"/>
                        <img src="../images/img-option-nobed-3.jpg" alt="침대없는 원룸 이미지3"/>
                        <img src="../images/img-option-nobed-4.jpg" alt="침대없는 원룸 이미지4"/>
                        <img src="../images/img-option-nobed-5.jpg" alt="침대없는 원룸 이미지5"/>
                        <img src="../images/img-option-nobed-6.jpg" alt="침대없는 원룸 이미지6"/>
                        <img src="../images/img-option-nobed-7.jpg" alt="침대없는 원룸 이미지7"/>
                        <img src="../images/img-option-nobed-8.jpg" alt="침대없는 원룸 이미지8"/>
                        <img src="../images/img-option-nobed-9.jpg" alt="침대없는 원룸 이미지9"/>
                    </RoomImg>
                </div>
            </Section>
            <Sns snsText="원룸의 사이즈와 가구배치는 각 원룸 마다 차이가 있을 수 있습니다."
            snsText2="자세한 입주 문의 및 기타 상담은 메신저를 통해 가능합니다." />
        </>
    );
}

export default Apartment2;