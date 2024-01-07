import '../Style/Container.css'
import img from '../assets/img3s.png'
import img1 from '../assets/img4.jpg'
import img2 from '../assets/imgm1.jpg'
import img3 from '../assets/imgm2.jpg'
import img4 from '../assets/imgm3.jpg'
import shirt1 from '../assets/shirt1.png'
import shirt2 from '../assets/shirt2.png'
import shirt3 from '../assets/shirt3.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

function Container(){
    return (
        <>
        <div className="main">
            <h3 className='h3'>Top Selling Products for you</h3>
            <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
        </div>

        <div className='main2'>
            <div className='imgs'>
                <img src={img2} alt="" className='img'/>
                <h2>Women Ethnic</h2>
                
                </div>
            
                <div className='imgs'>
                <img src={img1} alt="" className='img'/>
                <h2>Women western</h2>
                
                </div>

                <div className='imgs'>
                <img src={img} alt="" className='img'/>
                <h2>Goggles</h2>
                
                </div>

                <div className='imgs'>
                <img src={img3} alt="" className='img'/>
                <h2>Printed T-Shirt</h2>
                
                </div>

                <div className='imgs'>
                <img src={img4} alt="" className='img'/>
                <h2>Fashin T-Shirt</h2>
                
                </div>          
        </div>
        <div className='main-btn'>
            <button className='btn-c'>View All Button</button>
        </div>

        <div className="main">
            <h3 className='h3'>Top Selling Products for you</h3>
            <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
        </div>

        <div className='main3'>
            <div className='divs'>
                <div className='inside-div'>
                <img src={shirt1} alt="" className='s-img'/>
                <h3>Casual Wear</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur.</p>
                </div>
               
            </div>
            <div className='divs'>
                <div className='inside-div'>
                <img src={shirt2} alt="" className='s-img'/>
                <h3>Casual Wear</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur.</p>
                </div>
               
            </div>
            <div className='divs'>
                <div className='inside-div'>
                <img src={shirt3} alt="" className='s-img'/>
                <h3>Casual Wear</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur.</p>
                </div>
               
            </div>
        </div>

        <div className='main4'>
            <div className='main4-left'>
                <img src={img1} alt="" />
            </div>
            <div className='main4-right'>
                <h1>Winter Sale upto 50% off</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi maxime quas, minus quia neque consectetur vel tempore excepturi facere.</p>
            <div className='sec1'>
                <div className='icons'><img src={icon1} alt="" className='icon-img'/> 
                </div>
                <div>Quality Products</div>
            </div>

            <div className='sec1'>
                <div className='icons1'><img src={icon2} alt="" className='icon-img'/> 
                </div>
                <div>Fast Delivery</div>
            </div>

            <div className='sec1'>
                <div className='icons'><img src={icon3} alt="" className='icon-img'/> 
                </div>
                <div>Easy Payment method</div>
            </div>

            <div className='sec1'>
                <div className='icons1'><img src={icon4} alt="" className='icon-img'/> 
                </div>
                <div>Get Offers</div>
            </div>
            </div>
           
        </div>
        <div className='main5'>
                <h2>Get Notified About New <br />Products</h2>
                <input type="text" className='input-box' placeholder='Search'/>
            </div>

            <div className='main3'>
            <div className='divs'>
                <div className='inside-div'>
                <img src={shirt1} alt="" className='s-img'/>
                <h3>Casual Wear</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur.</p>
                </div>
               
            </div>
            <div className='divs'>
                <div className='inside-div'>
                <img src={shirt2} alt="" className='s-img'/>
                <h3>Casual Wear</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur.</p>
                </div>
               
            </div>
            <div className='divs'>
                <div className='inside-div'>
                <img src={shirt3} alt="" className='s-img'/>
                <h3>Casual Wear</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aspernatur.</p>
                </div>
               
            </div>
        </div>
        <div className='footer'>
           <h1>hellooo</h1>
        </div>
        </>
    )
}
export default Container;