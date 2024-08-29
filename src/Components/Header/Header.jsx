import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {

    const  nav_title = [{
        path:'/',displayMenu:'Home '
    },
    {
        path:'/Services',displayMenu:'Services '
    },
    {
        path:'/Courses',displayMenu:'Course '
    },
    {
        path:'/About',displayMenu:'About Us '
    }
]


  return (
    <header className='header'>
      <div className="container">
        <div className="nav-container">
           <div className="logo">
                <div className="logo-img">
                    <img src={logo}/>
                </div>
                <h2>Code Vibe</h2>
            </div> 

            <div className="navigation">
            <ul className='menu'>
                {
                nav_title.map((item,index)=>(
                    <li className='nav_item' key={index}><Link to={item.path}>{item.displayMenu}</Link></li>
                ))
                }
            </ul>


            </div>
        </div>



      </div>
      

    </header>
  )
}

export default Header
