import React from 'react'
import { NavLink } from 'react-router-dom';
import web from './5.svg';
import Common from './Common';
const About=()=>{
    return(
        <>
        <Common text="Welcome to About Page" 
        img={web}
        visit="/contact"
        btnname="Contact Now"
        />
        </>
    )
}
export default About;