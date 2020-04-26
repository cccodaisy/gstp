import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import AboutUs from "../Routes/AboutUs";
import Apartment from "../Routes/Apartment";
import Facility from "../Routes/Facility";
import Facility2 from "../Routes/Facility2";
import Apartment2 from "../Routes/Apartment2";
import Contact from "../Routes/Contact";
import Language from "../Routes/Language";
import Header from "./Header";
import Footer from "./Footer";


export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/apartment/bed" exact component={Apartment} />
                <Route path="/apartment/nobed" component={Apartment2} />
                <Route path="/facility/lounge" component={Facility} />
                <Route path="/facility/surround" component={Facility2} />
                <Route path="/contact" component={Contact} />
                <Route path="/language" component={Language} />
                {/* <Redirect from="*" to="/" /> */}
            </Switch>
            <Footer/>
        </>
    </Router>
)