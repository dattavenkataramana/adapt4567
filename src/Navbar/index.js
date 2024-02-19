import {Component} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegMoon } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";


import './index.css'


class Navbar extends Component{
    render(){
        return(
            <> 
            <div className='adjust'> 
               <ul className='nameofflex'> 
                  <li style={{paddingLeft: "50px"}}> <GiHamburgerMenu /></li>
                </ul>
                <ul className='nameofcon'>
                <li style={{padding: "20px"}}><FaRegMoon /></li>
                <li style={{padding: "20px"}}><FaRegBell /></li>
                <li style={{padding: "20px"}}><MdGTranslate /></li>
                </ul>
            </div>
            </>
        )
    }

}

export default Navbar;  