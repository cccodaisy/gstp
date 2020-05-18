import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import AboutUs from "Routes/AboutUs";
import Apartment from "Routes/Apartment";
import Facility from "Routes/Facility";
import Facility2 from "Routes/Facility2";
import Apartment2 from "Routes/Apartment2";
import Contact from "Routes/Contact";
import HomeEn from "Routes/HomeEn";
import AboutUsEn from "Routes/AboutUsEn";
import ApartmentEn from "Routes/ApartmentEn";
import FacilityEn from "Routes/FacilityEn";
import FacilityEn2 from "Routes/FacilityEn2";
import ApartmentEn2 from "Routes/ApartmentEn2";
import ContactEn from "Routes/ContactEn";
import Header from "Components/Header";
import Footer from "Components/Footer";


export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/kr" exact component={Home} />
                <Route path="/kr/aboutus" component={AboutUs} />
                <Route path="/kr/apartment/bed" exact component={Apartment} />
                <Route path="/kr/apartment/nobed" component={Apartment2} />
                <Route path="/kr/facility/lounge" component={Facility} />
                <Route path="/kr/facility/nearby" component={Facility2} />
                <Route path="/kr/contact" component={Contact} />
                <Route path="/en" exact component={HomeEn} />
                <Route path="/en/aboutus" component={AboutUsEn} />
                <Route path="/en/apartment/bed" exact component={ApartmentEn} />
                <Route path="/en/apartment/nobed" component={ApartmentEn2} />
                <Route path="/en/facility/lounge" component={FacilityEn} />
                <Route path="/en/facility/nearby" component={FacilityEn2} />
                <Route path="/en/contact" component={ContactEn} />
                <Redirect from="*" to="/kr" />
            </Switch>
            <Footer/>
        </>
    </Router>
)