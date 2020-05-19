import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import LOGO from "images/logo-thg-d.png";
import Sidebar from "react-sidebar";

const Header = styled.header`
    color: white;
    position: ${props => props.current === '/' || props.current === '/kr' || props.current === '/en' ? 'absolute' : 'relative'};
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.current === '/' || props.current === '/kr' || props.current === '/en' ? 'transparent' : '#4d4d4d'};
    z-index: 10;
    transition: all 0.5s ease-in-out;
    @media only screen and (max-width: 780px) {
        height: ${props => props.isMenuOpen === true ? '100%' : '72px'};
        position: fixed;
        background-color: 
        ${props => props.current === '/' || props.current === '/kr' || props.current === '/en' ? (props.bgColor ? props.bgColor : 'transparent') : props.isMenuOpen === true ? 'transparent' : (props.bgColor ? props.bgColor : '#4d4d4d')}
    }
`;

const Inner = styled.div`
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
`;

const Logo = styled.div`
    display: block;
    position: absolute;
    left: 10px;
    top: 33px;
    width: 100px;
    height: 100px;
    @media only screen and (max-width: 780px) {
        left: 5%;
        top: 15px;
        width: 60px;
        height: 60px;
        z-index: 10;
    }
`;


const List = styled.ul`
    flex: 4;
    display: block;
    margin-top: -7px;
    @media only screen and (max-width: 780px) {
        flex: 1;
        display: flex;
        flex-flow: column wrap;
        margin: 40% 10% 0 10%; 
    }
`;

const Item = styled.li`
    position: relative;
    height: 65px;
    display: block;
    float: right;
    margin: 0 1.8%;
    padding: 0 10px;
    text-align: center;
    border-bottom: 3px solid
     ${props => props.current ? "#ffff25" : "transparent" };
    transition: border-bottom .5s ease-in-out;
    color:  ${props => props.current ? "#ffff25" : "white" };
    &:first-child {
        margin-right: 2%;
    }
    &:last-child{
        margin-left: 0;
    }
    &:hover {
        border-bottom: 3px solid #ffff25;
        & div{
            display: block;
            transition: display 1s linear;
        }
    }
    @media only screen and (max-width: 780px) {
        height: 60px;
        position: unset;
        margin: 0;
        padding: 0 5px;
        border-bottom: 1px solid white;
        &:hover{
            border-bottom: 1px solid white;
        }
    }
`;

const SLink = styled(Link)`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4em;
    &.home{
        background: url(${LOGO}) no-repeat;
        background-size: auto 85px;
    }
    & > span{
        margin: 9px 0 0 9px;
        border-style:solid; 
        border-width: 6px;
        border-color:  white transparent transparent transparent;
    }

    @media only screen and (max-width: 780px) {
        height: 55px;
        align-items: left;
        justify-content: left;
        &.home{
            background-size: auto 45px;
        }
    }
`;

const Deps = styled.div`
    transition: display 1s linear;
    position: absolute;
    display: none;
    top: 65px;
    left: 0;
    @media only screen and (max-width: 780px) {
        position: unset;
        display: block;
        margin-top: -5px;
    }
`
const DLink = styled(Link)`
    width: 150px;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.4em;
    color: #4d4d4d;
    border-bottom: 1px solid #c9c9c9;
    &:last-child{
        border-bottom: unset;
    }
    &:hover{
        background-color: #c9c9c9;
    }
    @media only screen and (max-width: 780px) {
        width: 100%;
        height: 30px;
        text-align: left;
        background-color: unset;
        color: #c9c9c9;
        border-bottom: unset;
        font-size: 1.1em;
        &:hover{
            background-color: unset;
            color: #f5f5f5;
        }
    }
`;

const Hamburger = styled.div`
    width: 35px;
    height: 25px;
    position: absolute;
    right: 20px;
    top: 18px;
    z-index: 11;
    
    & span {
        display: block;
        margin: 7px auto;
        background-color: white;
        width: 100%;
        height: 3px;
        border-radius: 5px;
        transition: all .5s ease;
    }
    
    &:hover {
        & span:first-child{
        transform: translateY(-3px);
        }

        & span:last-child{
        transform: translateY(3px);
        }
    }

    &.opened {
        & span:first-child{
            transform: translateY(10px) rotate(45deg);
        }
        
        & span:nth-child(2) {
            transform: scaleX(0);
        }
        
        & span:last-child{
            transform: translateY(-10px) rotate(-45deg);
        }
    }
`

class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isMenuOpen: false,
            windowWidth: window.innerWidth,
            bgColor: ''
        }
      }

    toggleMenu = () => {
        const {isMenuOpen} = this.state;
        this.setState(state => {
            return {
                isMenuOpen: !state.isMenuOpen
            }
        })
        if(isMenuOpen === false){
            this.setState({
                bgColor: 'transparent'
            })
        }
        // console.log(this.state.isMenuOpen)
    }
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
                isMenuOpen: false,
                bgColor: this.props.location.pathname === '/' || this.props.location.pathname === '/kr' || this.props.location.pathname === '/en'  ? 'transparent' : '#4d4d4d'
            })
        }
    }
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }
      
    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
      
    trackScrolling = () => {
        const { isMenuOpen } = this.state;
        const wrappedElement = document.getElementById('root');
        // console.log(wrappedElement.getBoundingClientRect().top)
        if(wrappedElement.getBoundingClientRect().top < -150){
            this.setState({
                bgColor: 'rgba(77, 77, 77, 0.6)'
            })
            if(isMenuOpen === true) {
                this.setState({
                    bgColor: 'transparent'
                })
            } else {
                this.setState({
                    bgColor: 'rgba(77, 77, 77, 0.6)'
                })
            }
        } 
        else{
            this.setState({
                bgColor: this.props.location.pathname === '/' || this.props.location.pathname === '/kr' || this.props.location.pathname === '/en' ? 'transparent' : '#4d4d4d'
            })
        }
    };

    render() {
        const { location : { pathname }} = this.props;
        const { isMenuOpen, windowWidth, bgColor } = this.state;
        // console.log(this.state);
        return(
        windowWidth > 780 ? 
        <Header current={ pathname } >
            <Inner>
                <Logo>
                    <SLink to={pathname.includes('kr') ? '/kr' : '/en'} className="home" style={{height: "85px"}}></SLink>
                </Logo>
                <List>
                    <Item >
                        <SLink style={{width: '130px'}} to={pathname.includes('kr') ? '/kr' : '/en'} >Language<span></span></SLink>
                        <Deps>
                            <DLink to="/kr" >한국어</DLink>
                            <DLink to="/en" >English</DLink>
                        </Deps>
                    </Item>
                    <Item current={ pathname === "/kr/contact" || pathname === "/en/contact" }>
                        <SLink to={pathname.includes('kr') ? '/kr/contact' : '/en/contact'}>Contact &amp; Location</SLink>
                    </Item>
                    <Item current={ pathname.includes("/facility") }>
                        <SLink style={{width: '130px'}} to={pathname.includes('kr') ? '/kr/facility/lounge' : '/en/facility/lounge'}>Facilities<span></span></SLink>
                        <Deps>
                            <DLink to={pathname.includes('kr') ? '/kr/facility/lounge' : '/en/facility/lounge'}>{ pathname.includes('/kr') ? '공유 라운지' : 'The common area' }</DLink>
                            <DLink to={pathname.includes('kr') ? '/kr/facility/nearby' : '/en/facility/nearby'}>{ pathname.includes('/kr') ? '주변 시설' : 'Places to see nearby' }</DLink>
                        </Deps>
                    </Item>
                    <Item current={ pathname.includes('/apartment') }>
                        <SLink to={pathname.includes('kr') ? '/kr/apartment/bed' : '/en/apartment/bed'}>Apartment Type</SLink>
                    </Item>
                    <Item current={ pathname === "/kr/aboutus" || pathname === "/en/aboutus" }>
                        <SLink to={pathname.includes('kr') ? '/kr/aboutus' : '/en/aboutus'}>AboutUs</SLink>
                    </Item>
                </List>
            </Inner>
        </Header> 
        :
        <Header isMenuOpen={isMenuOpen} current={ pathname } bgColor={bgColor}>
            <Logo>
                <SLink to={pathname.includes('kr') ? '/kr' : '/en'}  className="home" style={{height: "60px"}}></SLink>
            </Logo>
            <Sidebar 
                pullRight={true}
                sidebar={
                    <List>
                        <Item current={ pathname === "/kr/aboutus"  || pathname === "/en/aboutus"}>
                            <SLink to={pathname.includes('kr') ? '/kr/aboutus' : '/en/aboutus'}>AboutUs</SLink>
                        </Item>
                        <Item current={ pathname.includes('/apartment') }>
                            <SLink to={pathname.includes('kr') ? '/kr/apartment/bed' : '/en/apartment/bed'}>Apartment Type</SLink>
                        </Item>
                        <Item current={ pathname.includes("/facility") } style={{height: '130px'}}>
                            <SLink to={pathname.includes('kr') ? '/kr/facility/lounge' : '/en/facility/lounge'}>Facilities</SLink>
                            <Deps>
                                <DLink to={pathname.includes('kr') ? '/kr/facility/lounge' : '/en/facility/lounge'}>{ pathname.includes('/kr') ? '공유 라운지' : 'The common area' }</DLink>
                                <DLink to={pathname.includes('kr') ? '/kr/facility/nearby' : '/en/facility/nearby'}>{ pathname.includes('/kr') ? '주변 시설' : 'Places to see nearby' }</DLink>
                            </Deps>
                        </Item>
                        <Item current={ pathname === "/kr/contact"  || pathname === "/en/contact"}>
                            <SLink to={pathname.includes('kr') ? '/kr/contact' : '/en/contact'}>Contact &amp; Location</SLink>
                        </Item>
                        <Item style={{height: '130px'}}>
                            <SLink to={pathname.includes('kr') ? '/kr' : '/en'}  >Language</SLink>
                            <Deps>
                                <DLink to="/kr" >한국어</DLink>
                                <DLink to="/en" >English</DLink>
                            </Deps>
                        </Item>
                    </List>
                }
                open={isMenuOpen}
                onSetOpen={this.toggleMenu}
                styles={{ 
                    sidebar: {
                        background: "#4d4d4d",
                        width: "80%"
                    },
                    content: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflowY: "auto",
                        WebkitOverflowScrolling: "touch",
                        transition: "left .3s ease-out, right .3s ease-out",
                        zIndex: 2,
                        height: '72px'
                    }
                }}
                >
                <Hamburger onClick={()=> this.toggleMenu()}
                    className={isMenuOpen === true ? 'opened':''}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
            </Sidebar>
        </Header>
        )
    }
}

export default withRouter(HeaderWrapper);