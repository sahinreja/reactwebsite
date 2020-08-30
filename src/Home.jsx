import React from 'react'
import { NavLink } from 'react-router-dom';
import web from './2.svg';
import Common from './Common'
import Service from './Service'
import About from './About'
import Contact from './Contact'
const Home=()=>{
    return(
        <>
        <Common text="Grow your business with" 
        img={web}
        visit="/service"
        btnname="Get Started" />
        <Service />
        <About />
        <Contact />
        </>
    )
}
export default Home;
