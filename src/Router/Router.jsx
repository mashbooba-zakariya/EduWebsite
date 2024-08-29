import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Plan from '../Components/Pages/Plans/Plan'
import Community from '../Components/Pages/Community/Community'
import Courses from '../Components/Pages/Courses/Courses'
import AboutUs from '../Components/Pages/AboutUs/AboutUs'
import ContactUs from '../Components/Pages/ContactUs/ContactUs'
import SupportUs from '../Components/Pages/SupportUs/SupportUs'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/Services' Component={Plan}/>
                <Route path='/Courses' Component={Courses}/>
                <Route path='/Community' Component={Community}/>
                <Route path='/About' Component={AboutUs}/>
                <Route path='/Contact' Component={ContactUs}/>
                <Route path='/Support' Component={SupportUs}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        
      
    </div>
  )
}

export default Router
