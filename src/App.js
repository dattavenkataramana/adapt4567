import {Component} from 'react'

 import Navbar from './Navbar'
 import { BsSpeedometer2 } from "react-icons/bs";
 import { IoPricetagOutline } from "react-icons/io5";
 import { LuMenuSquare } from "react-icons/lu";
 import { MdOutlineLocalShipping } from "react-icons/md";
 import { CiShare2 } from "react-icons/ci";
 import { RxCross2 } from "react-icons/rx";
 import { MdOutlineSettings } from "react-icons/md";
 import { LiaFileImportSolid } from "react-icons/lia";
 import { AiOutlineSend } from "react-icons/ai";
 import { MdOutlineLocalPrintshop } from "react-icons/md";
 import { LuRefreshCw } from "react-icons/lu";
 import { RiContractUpDownFill } from "react-icons/ri";
 import { PiFlashlight } from "react-icons/pi";
 import { MdSearch } from "react-icons/md";
 import { GiShoppingBag } from "react-icons/gi";
 import { MdKeyboardArrowDown } from "react-icons/md";
 import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
 import { MdOutlineArrowRight } from "react-icons/md";
  

import './App.css';

class App extends Component {
   
  render() {
     
    return (
  <> 
    <Navbar /> 
    <div className="App"> 
      <div className='shadowTwo'>
        <div className='dashbord'>
            <BsSpeedometer2  className='heigth'/>
            <h1 className="dashboard data">Dashboard</h1>
        </div>
        <div className='dashbord'>
            <IoPricetagOutline  className='heigth'/>
            <h1 style={{paddingRight:"10px"}} className="dashboard data">Inventory</h1>
        </div>
        <div className='dashbord colorB'>
            <LuMenuSquare  className='heigth'/>
            <h1   style={{paddingRight:"29px"}}  className="dashboard data">Orders</h1>
        </div>
        <div className='dashbord'>
            <MdOutlineLocalShipping  className='heigth'/>
            <h1 style={{paddingRight:"12px"}} className="dashboard data">Shipping</h1>
        </div>
        <div className='dashbord'>
            <CiShare2  className='heigth'/>
            <h1 style={{paddingRight:"23px"}} className="dashboard data">Channel</h1>
        </div>
      </div>
      <div className='secondoredsetting'> 
         <div className='oredset'>
            <div className='neworange'>
                <p className="orders-x">Order</p>
                <RxCross2 />
            </div>
            <div className='settingIcon'>
                  <MdOutlineSettings className='settingicon'/>
            </div>
         </div> 
         <div className='itemdeaplay'>
            <div className='paracon'> 
                 <p>Pendding</p>
            </div>
            <p className='specilcolor'>Accepted</p>
            <p>AWB Created</p>
            <p>Ready to ship</p>
            <p>Shipped</p>
            <p>Compleated</p>
            <p>Cancelled</p>
         </div>
        <div className='tablecontainer'> 
            <div className='bottoncontainer'>
              <div> 
                   <button className='bottoncolor1'><LiaFileImportSolid/> Import Order</button>
                   <button className='bottoncolor2'><AiOutlineSend/> Accept</button>
                   <button className='bottoncolor3'><MdOutlineLocalPrintshop/> Print</button>
              </div>
              <div> 
                   <button className='bottoncolor4'><LuRefreshCw/>  Refresh</button>
               </div>
            </div> 
            <div className='Itemcontainerofchannel'> 
                <div className='box-container'>
                     <input type="checkbox" />      
                </div>
                <div className='border234'>
                  <h1>Channel <RiContractUpDownFill /><PiFlashlight/></h1>
                </div>
                <div className='bored23'>
                  <h1>Order No</h1>
                </div>
                <div className='ordercontainer'>
                  <h1><RiContractUpDownFill />  <MdSearch/></h1>
                </div>
                <div>
                   <h1>Order Date <RiContractUpDownFill />  <MdSearch/></h1>
                </div>
                <div>
                  <h1>City <RiContractUpDownFill /></h1>
                </div>
                <div className='oredValue12334'>
                   <h1>Customer Name</h1>
                   <h1 className='MD'><MdSearch/></h1> 
                </div>
                <div className='oredValue'>
                  <div>
                    <h1>Order</h1>
                    <h1>Value</h1>
                  </div>
                  <RiContractUpDownFill className='Ri'/>
                  <h1>Status</h1>
                </div>
                <div><RiContractUpDownFill /></div>
                <div><h1>Operation</h1></div>
            </div>
          <div className='finalcontainer'>
            <div className='fimalcon'>
              <h1>+</h1>
              <input className="inputtext" type="checkbox"/>
              <h1 class="icon"><GiShoppingBag/></h1>
              <p className='paddingparas'>#TKN20203754</p>
              <p style={{marginRight:"-60px"}}>2020-05-04</p>
              <p className='paralucknow'>Lucknow</p>
              <p className='dixit'>Abhishek Dixit</p>
              <p className='zeros'>0.00</p>
               <button className='buttonblue'>Pending</button>
               <button className='buttonAction'>Action <MdKeyboardArrowDown/></button> 
            </div>
            <div className='fimalcon'>
              <h1>+</h1>
              <input className="inputtext" type="checkbox"/>
              <h1 class="icon"><GiShoppingBag/></h1>
              <p className='paddingparas'>#TKN20203754</p>
              <p style={{marginRight:"-60px"}}>2020-05-04</p>
              <p className='paralucknow'>Lucknow</p>
              <p className='dixit'>Abhishek Dixit</p>
              <p className='zeros'>0.00</p>
               <button className='buttonblue'>Pending</button>
               <button className='buttonAction'>Action <MdKeyboardArrowDown/></button> 
            </div>
            <div className='fimalcon'>
              <h1>+</h1>
              <input className="inputtext" type="checkbox"/>
              <h1 class="icon"><GiShoppingBag/></h1>
              <p className='paddingparas'>#TKN20203754</p>
              <p style={{marginRight:"-60px"}}>2020-05-04</p>
              <p className='paralucknow'>Lucknow</p>
              <p className='dixit'>Abhishek Dixit</p>
              <p className='zeros'>0.00</p>
               <button className='buttonblue'>Pending</button>
               <button className='buttonAction'>Action <MdKeyboardArrowDown/></button> 
            </div>
            <div className='fimalcon'>
              <h1>+</h1>
              <input className="inputtext" type="checkbox"/>
              <h1 class="icon"><GiShoppingBag/></h1>
              <p className='paddingparas'>#TKN20203754</p>
              <p style={{marginRight:"-60px"}}>2020-05-04</p>
              <p className='paralucknow'>Lucknow</p>
              <p className='dixit'>Abhishek Dixit</p>
              <p className='zeros'>0.00</p>
               <button className='buttonblue'>Pending</button>
               <button className='buttonAction'>Action <MdKeyboardArrowDown/></button> 
            </div>
             <div className='finalcontainer1234'>
                  <div className='button'>
                     <button className='buttonlast' style={{backgroundColor:'white',opacity:'0.5'}}><MdOutlineKeyboardArrowLeft/></button>
                     <button className='buttonlast'  style={{backgroundColor:'white' }}>1</button>
                     <button className='buttonlast'  style={{backgroundColor:'white',opacity:'0.5'}}><MdOutlineArrowRight /></button>
                     <button className='onebuttonlast'  style={{backgroundColor:'white' }}>20/Page <MdKeyboardArrowDown/></button>
                  </div>
             </div>
          </div> 
        </div>
         
      </div>
    </div>
  </>
    );
  }
}

export default App;
