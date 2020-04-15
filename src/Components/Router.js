import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import AboutUs from "../Routes/AboutUs";
import Room from "../Routes/Room";
import Facility from "../Routes/Facility";
import Contact from "../Routes/Contact";
import Language from "../Routes/Language";
import Header from "./Header";

export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/room" exact component={Room} />
                <Route path="/facility" component={Facility} />
                <Route path="/contact" component={Contact} />
                <Route path="/language" component={Language} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)