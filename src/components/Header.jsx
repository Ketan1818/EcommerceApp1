import '../Style/Header.css'
import cart from '../assets/cart.png'
import SimpleSlider from './Slider';
import Container from './Container';
import { useState } from 'react';
import arrow1 from '../assets/arrow1.png'
function Header(){
    const [ishover, setHover] =useState(false);
     const handle=()=>{
        setHover(!ishover);
     }
    return (
        <>
        <div className="header">
            <div className="nav-left">
                {/* <img src={logo} alt="" /> */}
                <h1>Shopsy</h1>
            </div>
            <div className="nav-right">
                <input type="text" placeholder="Search" className="search"/>
                <img src={cart} alt="" className='cart' />
            </div>
        </div>
        <div className='navbar'>
           <div className='items'>Home</div>
           <div className='items'>Top Rated</div>
           <div className='items'>Kids Wear</div>
           <div className='items'>Mens Wear</div>
           <div className='items'>Electronics</div>
           <div className='items'>Trending Products</div>
           
        </div>
        <SimpleSlider/>
        <Container/>
        </>
    )
    
}
export default Header;