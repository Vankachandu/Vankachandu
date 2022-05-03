import React from 'react'
import './App1.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillPersonFill, BsFillSuitHeartFill, BsCircle, BsFacebook, BsTwitter } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { AiOutlineMinus, AiOutlineShoppingCart } from "react-icons/ai";
import main from './Assets/main.png';
import icon from './Assets/icon.png';
import purse from './Assets/purse.png';
import shoe1 from './Assets/shoe1.png';
import shoe2 from './Assets/shoe2.png';
import Product from './Assets/product.png';
import purse1 from './Assets/purse1.png';
import white from './Assets/white.png';
import shoe3 from './Assets/shoe3.png';
import { RiStarSFill } from "react-icons/ri";
import shoe4 from './Assets/shoe4.png';
import shoe5 from './Assets/shoe5.png';
import shoe6 from './Assets/shoe6.png';
import shoe7 from './Assets/shoe7.png';
import blue from './Assets/blue.png';
import { HiOutlineMinus } from "react-icons/hi";
import mainshoe from './Assets/mainshoe.png';
import shipping from './Assets/shipping.png';
import refresh from './Assets/refresh.png';
import money from './Assets/money.png';
import head from './Assets/head.png';
import head1 from './Assets/head1.png';
import nike from './Assets/nike.png';
import colors from './Assets/colors.png';
import balls from './Assets/balls.png';
import same1 from './Assets/same1.png';
import last from './Assets/last.png';
import diamond from './Assets/diamond.png';
import westren from './Assets/westren.png';
import Mastercard from './Assets/Mastercard.png';
import special from './Assets/special.jpeg';
import hot from './Assets/hot.png';




function App1() {
    return (

        <div>

            <div className='top1'>EN</div>
            <div className='top2'>  <BsFillCaretDownFill size='10' /> </div>
            <div className='top3'>USD</div>
            <div className='top4'>  <BsFillCaretDownFill size='10' /></div>
            <div className='top5'> <BsFillPersonFill size="20" /> My Profile  </div>

            <div className='top7'><BsCart2 size="20" /></div>

            <div className='top8'> Items</div>
            <div className='top9 text-secondary'>%0.00 </div>
            <div className='top10'> <FcSearch size="20" /></div>
            <div className='ellipse'> </div>
            <div className='ell'>2</div>
            <div className='icon1'>
                <img src={icon} width="40" height="40" alt='icon'></img>
            </div>
            <div className='k1'>
                <img src={special} width='40' height='40' alt='special'></img>
            </div>

            <div className=' comm fw-bold'> E-COMM</div>
            <div className='A1 fw-bold  fs-4 '> HOME</div>
            <div className='A2 fw-bold fs-4'>BAG</div>
            <div className='A3 fw-bold fs-4'>SNEAKERS</div>
            <div className='A4 fw-bold fs-4'>BELT</div>
            <div className='A5 fw-bold fs-4'>CONTACT</div>

            <div className='shoes'></div>
            <div className='shoes1 fs-1'>  Super Flash Sale<br /> 50% off</div>

            <div className='purse'>
                <img src={purse} width="350" height="300" alt='purse' ></img>
            </div>
            <div className='shoesimg'>
                <img src={shoe1} width="400" height="300" alt='shoe1' ></img>
            </div>
            <div className='shoesimg1'>
                <img src={shoe2} width="400" height="300" alt='shoe2' ></img>
            </div>
            <div className='addcard '>
                <h5>FS-QUILTED MAXI<br />CROSS BAG</h5> </div>

            <div className='discount'> $534,33 </div>
            <div className='off fw-bold '> 24%off</div>

            <div className='number'> $299,43</div>

            <div className='addcard1'> <h5>FS - Nike  Air <br /> Max 270 React...</h5>
            </div>

            <div className='number1'> $299,43 </div>


            <div className='discount1'>$534.33 </div>
            <div className='off1 fw-bold '>24 % off</div>
            <div className='addcard2'>
                <h5> Fs-ike Air <br /> Max 270 React...</h5>
            </div>
            <div className='discount2'>$534.33 </div>
            <div className='off2 fw-bold '>24 % off</div>
            <div className='number2'> $299,43 </div>

            <div className='best'> <h1>BEST SELLER</h1></div>

            <div className='tag '> ALL</div>
            <div className='line'> <AiOutlineMinus size="70" /></div>
            <div className='tag1'>Bags</div>
            <div className='tag2'> Sneakers</div>
            <div className='tag3'> Belt</div>
            <div className='tag4'> Sunglasses</div>
            <br />


            <div>

                <div className='image' >

                    <img src={Product} width="250" height="300" alt="product" ></img>
                </div>

                <div className='image1'>
                    <img src={purse1} width="250" height="300" alt="purse1"></img>
                </div>
                <div className='image2'>
                    <img src={white} width="250" height="300" alt="white"  ></img>
                </div>
                <BsCircle className='circle' />
                <BsFillSuitHeartFill className='heart' />
                <BsCircle className='circle1' />
                <AiOutlineShoppingCart className='cart' />
                <div className='image3'>
                    <img src={shoe3} width="250" height="300" alt='shoe3' ></img>
                </div>
            </div>
            <br />
            <div >
                <h6 className='t1'>Nike Air Max 270 React</h6 >
                <RiStarSFill className='star' />
                <RiStarSFill className='star1' />
                <RiStarSFill className='star2' />
                <RiStarSFill className='star3' />
                <RiStarSFill className='star4' />

                <div className='money'>$299,43</div>
                <div className='money1'>$534,33</div>
                <div className='money2'>24% Off</div>
                <div className='total'>
                    <h6 className='t1'>Nike Air Max 270 React</h6 >
                    <RiStarSFill className='star' />
                    <RiStarSFill className='star1' />
                    <RiStarSFill className='star2' />
                    <RiStarSFill className='star3' />
                    <RiStarSFill className='star4' />
                    <div className='money'>$299,43</div>
                    <div className='money1-1'>$534,33</div>
                    <div className='money2-2'>24% Off</div></div>

                <div className='total1'>
                    <h6 className='t1'>Nike Air Max 270 React</h6 >
                    <RiStarSFill className='star0' />
                    <RiStarSFill className='star1-1' />
                    <RiStarSFill className='star2-2' />
                    <RiStarSFill className='star3-3' />
                    <RiStarSFill className='star4-4' />
                    <div className='money0'>$299,43</div>
                    <div className='money1-2'>$534,33</div>
                    <div className='money2-3'>24% Off</div></div>

                <div className='total1-1'>
                    <h6 className='t2'>Nike Air Max 270 React</h6 >
                    <RiStarSFill className='star0' />
                    <RiStarSFill className='star1-1' />
                    <RiStarSFill className='star2-2' />
                    <RiStarSFill className='star3-3' />
                    <RiStarSFill className='star4-4' />
                    <div className='money0-1'>$299,43</div>
                    <div className='money1-3'>$534,33</div>
                    <div className='money2-4'>24% Off</div></div>

                <div className='image4'>
                    <img src={shoe4} width="250" height="300" alt='shoe4' ></img>
                </div>
                <div className='image5'>
                    <img src={shoe5} width="250" height="300" alt='shoe5' ></img>
                </div>
                <div className='image6'>
                    <img src={shoe6} width="250" height="300" alt='shoe6' ></img>
                </div>
                <div className='image7'>
                    <img src={shoe7} width="250" height="300" alt='shoe7' ></img>
                </div>

                <div className='total1-2'>
                    <h6 className='t2'>Nike Air Max 270 React</h6 >
                    <RiStarSFill className='star0' />
                    <RiStarSFill className='star1-1' />
                    <RiStarSFill className='star2-2' />
                    <RiStarSFill className='star3-3' />
                    <RiStarSFill className='star4-4' />
                    <div className='money5'>$299,43</div>
                    <div className='money6'>$534,33</div>
                    <div className='money7'>24% Off</div></div>

                <div className='total1-3'>
                    <h6 className='t2'>Nike Air Max 270 React</h6 >
                    <RiStarSFill className='star0' />
                    <RiStarSFill className='star1-1' />
                    <RiStarSFill className='star2-2' />
                    <RiStarSFill className='star3-3' />
                    <RiStarSFill className='star4-4' />
                    <div className='money8'>$299,43</div>
                    <div className='money9'>$534,33</div>
                    <div className='money10'>24% Off</div></div>

                <div className='total1-4'>
                    <h6 className='t2'>Nike Air Max 270 React</h6 >
                    <RiStarSFill className='star9' />
                    <RiStarSFill className='star5' />
                    <RiStarSFill className='star6' />
                    <RiStarSFill className='star7' />
                    <RiStarSFill className='star8' />
                    <div className='money11'>$299,43</div>
                    <div className='money12'>$534,33</div>
                    <div className='money13'>24% Off</div></div>

                <div className='total1-5'>
                    <h6 className='t2'>Nike Air Max 270 React</h6 >
                    <RiStarSFill className='star9' />
                    <RiStarSFill className='star5' />
                    <RiStarSFill className='star6' />
                    <RiStarSFill className='star7' />
                    <RiStarSFill className='star8' />
                    <div className='money11'>$299,43</div>
                    <div className='money12'>$534,33</div>
                    <div className='money13'>24% Off</div></div>
            </div>

            <div className='Loadmore'>LOAD MORE</div>

            <br />
            <br />
            <br />

            <div>
                <img src={blue} width="1515" height="450" alt='blue' ></img>
            </div>
            <div className='head'>Adidas Men Running <br /> Sneakers</div>

            <div className='head1'>performance and design. taken right to the edge. </div>
            <div className='head2'>SHOP NOW</div>


            <div className='image8'>
                <img src={mainshoe} width="650" height="600" alt='mainshoe' ></img>
            </div>

            <div className='shipping'>
                <img src={shipping} width='100' height='100' alt='shipping'></img>
            </div>

            <div className='shipping1'>FREE  SHIPPING</div>
            <div className='shipping2'>Lorem  ipsum  is  simply </div>
            <div className='shipping3'>dummy text of the</div>
            <div className='shipping4'>printing and typesetting</div>
            <div className='shipping5'> industry</div>

            <div className='refresh'>
                <img src={refresh} width='100' height='100' alt='refresh'></img>
            </div>
            <div className='refresh1'>
                <img src={money} width='50' height='50' alt='money'></img>
            </div>
            <div className='refresh2'>
                <div className='shipping1'>100 % REFUND</div>
                <div className='shipping2'>Lorem  ipsum  is  simply </div>
                <div className='shipping3'>dummy text of the</div>
                <div className='shipping4'>printing and typesetting</div>
                <div className='shipping6'> industry</div>
            </div>
            <div className='men'>
                <img src={head} width='60' height='60' alt='head'></img>
            </div>
            <div className='men1'>
                <img src={head1} width='60' height='60' alt='head1'></img>
            </div>
            <div className='refresh3'>
                <div className='shipping1'>SUPPORT 24/7</div>
                <div className='shipping7'>Lorem  ipsum  is  simply </div>
                <div className='shipping3'>dummy text of the</div>
                <div className='shipping8'>printing and typesetting</div>
                <div className='shipping9'> industry</div>
            </div>

            <div className='latest'>LATEST NEWS</div>
            <div className='nike'>
                <img src={nike} width='120' height='50' alt='nike'></img>
            </div>
            <div className='nike1'>01 jan 2015</div>
            <div className='nike2'>Fasion industry</div>
            <div className='nike3'>Lorem  ipsum  is  simply <br />dummy text of the<br />printing and typesetting<br />industry</div>

            <div className='colors'>
                <img src={colors} width='120' height='80' alt='color'></img>
                <div className='colors1'>
                    <div className='nike1'>01 jan 2015</div>
                    <div className='nike2'>Best Design Tools</div>
                    <div className='nike3'>Lorem  ipsum  is  simply <br />dummy text of the<br />printing and typesetting<br />industry</div>
                </div>

            </div>

            <div className='balls'>
                <img src={balls} width='120' height='80' alt='balls'></img>
            </div>
            <div className='balls1'>
                <div className='nike1'>01 jan 2015</div>
                <div className='nike2'>Best Design Tools</div>
                <div className='nike3'>Lorem  ipsum  is  simply <br />dummy text of the<br />printing and typesetting<br />industry</div>
            </div>

            <div className='product'>FEATURED PRODUCTS</div>

            <div className='same'>
                <img src={same1} width='150' height='150' alt='same1'></img>

            </div>
            <div className='same1'>Blue Swade Nike <br /> Sneakers</div>
            <div className='same2'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill /></div>
            <div className='same3'>$499</div>
            <div className='same4'>$599</div>
            <div className='miss2'>
                <img src={same1} width='150' height='150' alt='same1'></img>

            </div>
            <div className='miss'>

                <div className='same1'>Blue Swade Nike <br /> Sneakers</div>
                <div className='same2'>
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill /></div>
                <div className='same3'>$499</div>
                <div className='same5'>$599</div></div>
            <div className='miss3'>
                <img src={same1} width='150' height='150' alt='same1'></img>

            </div>
            <div className='miss4'>

                <div className='same1'>Blue Swade Nike <br /> Sneakers</div>
                <div className='same2'>
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill /></div>
                <div className='same3'>$499</div>
                <div className='same6'>$599</div></div>
            <form class="searchform">
                <input type="text" placeholder="Search query" />
                <button type="submit" className='search'>Search</button>
            </form>
            <br />
            <br />
            <br />
            <div>
                <img src={last} width='1518' height='900' alt='last'></img>
            </div>
            <br />
            <div className='diamond'>
                <img src={special} width='50' height='60' alt='special'></img>
            </div>
            <div className='c2'>E-Comm</div>
            <div className='c1'>Lorem ipsum is simply dummy text of the <br /> printing and typesetting industry.Lorem<br /> ipsum has been the industry's starndard<br /> dummy text ever. SInce the 1500s,  when <br /> an unknown printer</div>
            <div className='c3'>Follow Us</div>
            <div className='c4'>Since the 1500s when an unknown <br /> printing took a galley of type and <br /> scrambled</div>
            <BsFacebook className='c5' />
            <BsTwitter className='c6' />
            <div className='c7'>Contact Us</div>
            <div className='c8'>E-Comm , 4578 <br /> Marmora Road , <br /> Glasgow D04 89GR</div>

            <div className='v1'>Information</div>
            <div className='v2'>About Us<br /> Information <br /> Privacy Policy <br /> Terms & Conditions </div>

            <div className='v3'>Service</div>
            <div className='v4'>About Us<br /> Information <br /> Privacy Policy <br /> Terms & Conditions </div>

            <div className='v5'>My Account</div>
            <div className='v6'>About Us<br /> Information <br /> Privacy Policy <br /> Terms & Conditions </div>

            <div className='v7'>Our Offers</div>
            <div className='v8'>About Us<br /> Information <br /> Privacy Policy <br /> Terms & Conditions </div>
            <br />
            <br />
            <hr className='hr'></hr>
            <br />

            <div className='com'>@ 2022 Ecommerence theme by www.bisenbaev.com</div>
            <div className='westren'>
                <img src="https://static.india.com/wp-content/uploads/2018/03/western-union.jpg?impolicy=Medium_Resize&w=1200&h=800" width='100' height='50' alt='westren'></img>
            </div>
            <div className='master'>
                <img src={Mastercard} width='100' height='50' alt='master'></img>
            </div>
            <div className='paypal'>
                <img src="https://pngimg.com/uploads/paypal/paypal_PNG1.png" width='100' height='50' alt='master'></img>
            </div>
            <div className='visa'>
                <img src="https://pngimg.com/uploads/visa/visa_PNG30.png" width='100' height='35'></img>
            </div>
        </div>

    )
}

export default App1