import React , {UseState} from 'react' 
import './App.css' 
import { SiGooglemessages } from "react-icons/si";
import { BsTelephone } from "react-icons/bs"; 
import { GrGoogle } from "react-icons/gr"; 
import { FaPinterestP } from "react-icons/fa";
import { ImMail2, ImPinterest2 } from "react-icons/im"; 
import { FiPhoneCall, } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs"; 
import { FaFacebookF } from "react-icons/fa"; 
import { BiGlobe } from "react-icons/bi"; 
import family from './chandu.pic/family.jpeg' 
import build1 from './chandu.pic/build1.jpeg' 
import build2 from './chandu.pic/build2.jpeg' 
import build3 from './chandu.pic/build3.jpeg';
import money from './chandu.pic/money.jpg'
import liquid from './chandu.pic/liquid.jpeg'
import synertec from './chandu.pic/synertec.jpeg'
import dropawf from './chandu.pic/dropawf.jpeg'
import follow from './chandu.pic/follow.jpeg'
import man from './chandu.pic/man.jpeg'
import { BsFillPlusCircleFill, BsInstagram,  BsDribbble } from "react-icons/bs";
import c1 from './chandu.pic/c1.jpeg'
import c2 from './chandu.pic/c2.jpeg'
import c3 from './chandu.pic/c3.jpeg'
import c4 from './chandu.pic/c4.jpeg'
import c5 from './chandu.pic/c5.jpeg'
import house1 from './chandu.pic/house1.jpeg'
import house2 from './chandu.pic/house2.jpeg'
import house3 from './chandu.pic/house3.jpeg'
import house4 from './chandu.pic/house4.jpeg'
import house5 from './chandu.pic/house5.jpeg'
import street from './chandu.pic/street.jpeg'
import { AiFillSetting, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import logo1 from './chandu.pic/nrmal.png'
import logo2 from './chandu.pic/thin.png'
import { VscDebugStackframeDot } from "react-icons/vsc";
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialGooglePlusCircular } from "react-icons/ti";


    const App1 =() => { 
        return( 
        <div> 
        <div className='bar d-flex'>
                <div className='mail'><ImMail2 size="20px" />&nbsp;&nbsp;sample@sample.com</div>
                <div className='phone'><FiPhoneCall size="20px" />&nbsp;&nbsp;00 1234 5678</div>
                <div className='google'><TiSocialGooglePlusCircular size="30px" /></div>
                <div className='pin'><ImPinterest2 size="20px" /></div>
                <div className='twitter'><TiSocialTwitterCircular size="30px" /></div>
                <div className='fb'><TiSocialFacebookCircular size="30px" /></div>
                <div className='dribble'><BsDribbble size="20px" /></div>
            </div>
            <div> 
                <lable className='a'>WP</lable>
                <label className='vc'>/Real Estate</label> 
                <lable className='b'>HOME</lable> 
                <lable className='c'>ABOUT </lable> 
                <lable className='c'>AGENTS</lable> 
                <lable className='c'>PROPERTIES</lable> 
                <lable className='c'>BLOG</lable> 
                <lable className='c'>CONTACT</lable> 
                </div>
                
                <div> 
                <img src={family} width='1530' height='700'/> 
                </div>
                <div className='smart'>
                <div className='chandu1'><h4>If you can dream, we can create it</h4></div>
                <div className='chandu2'><h1>Find your house without <br />any difficulties</h1></div>
                <button className='btn btn-outline-light'>Know More</button>
            </div>
            <div className='arrow'><label>01|05 . . . . . </label><AiOutlineLeft/><AiOutlineRight/></div> 
                <div>
                <div className='logo'>
                <div className='logo1'><img src={money} alt="money" height="100" width="210"></img></div>
                <div className='logo2'><img src={liquid} alt="liquid" height="100" width="200"></img></div>
                <div className='logo3'><img src={synertec} alt="synertec" height="100" width="200"></img></div>
                <div className='logo4'><img src={dropawf} alt="dropawf" height="100" width="200"></img></div>
                <div className='logo5'><img src={follow} alt="follow" height="100" width="200"></img></div>
            </div>
                
                </div>
                 <div className='a7'> 
                     <lable className='a1'>WP</lable>
                     <label className='vc'>/Real Estate</label><br/>
                     <lable className='e'>Properties</lable><br/> 
                     <label className='f'>H O M E   F O R   S A L E</label> 
                 </div> 
                 <div className='g'> 
                <img src={build1} width='1000' height='500'/> 
                </div> 
                <div > 
                <img className='g' src={build1} width='300' height='400'/> 
                <img className='c' src={build2} width='300' height='400'/> 
                <img className='c' src={build3} width='350' height='400'/> 
                </div> 
                <div> 
                <span className='h'>Scandinavian style apartment</span><br/> 
                <span className='i'>94-98 Ingraham St,Brooklyn,NY 11237,USA</span> 
                <span className='j'>Lovelace Road Greenfield</span><br/> 
                <span className='k'>120 N St SW Thomaston,Georgie(GA),30286</span> 
                <span className='l'>Building Complex Apartments</span><br/> 
                <span className='m'>319 Brookmeade Way Lawrenceville,Georgia(GA),30043</span> 
                </div> 
                <hr className='text-muted line'></hr>
            <div className='add'><BsFillPlusCircleFill size="34" /></div>
            <div className='add1'>VIEW MORE</div>
            
                <div> 
                <div>
                    <div className='text1'>Beautifully designed, inside <br />and out, Studio looks every bit <br />as powerful as it is.</div>
                    <div className='text2'>The Photoshop's version of Lorem ipsum Prom greide nit vel velit auctor ligist<br />
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem<br />
                        rabh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris</div>
                    <div className='sign'>signature</div>
                <img src={man} alt="man" height={"500"}  className="www"></img>
                </div>
                <br/>
                <br/>
               <label className='oo'>Our Clinets Review</label><br/> 
               <br/> 
               <br/> 
               <div className='fa'>Duane Neal</div> 
               <span className='ma'>Product Designer,USA</span><br/> 
               <br/> 
               <br/> 
               <label className='sa'>I'm a freelance fashion designer who specialises in print designs and combining fabrics.My designs have been sold all over Europe and</label><br/> 
               <label className='ss'>the USA and I have worked with some of the biggest designers in the industry.I'm also currently working with a big supermarket to </label> 
                 <label className='aa'>develop a gorgeous,yet affordable</label> 
                 <br/>
                 <br/>
                 <br/>
                </div>
                <div className='d-flex image'>
                <div className='c1'><img src={c1} alt="c1" className='rounded-circle' height="100"></img></div>
                <div className='c2'><img src={c2} alt="c2" className='rounded-circle' height="100" width={100}></img></div>
                <div className='c3'><img src={c3} alt="c3" className='rounded-circle' height="100"></img></div>
                <div className='c4'><img src={c4} alt="c4" className='rounded-circle' height="100" width={100}></img></div>
                <div className='c5'><img src={c5} alt="c5" className='rounded-circle' height="100" width={100}></img></div>
            </div><br />
                <div className='dots'>
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                    <span class="dot" onclick="currentSlide(4)"></span>
                    <span class="dot" onclick="currentSlide(5)"></span>
                </div>
            <div className='our'>Our <b>Blog</b></div>
                 
            <div className='d-flex'>
            <div className='house1'><img src={house1} height="600" width="450" alt="house1"></img></div>           
            <div className='house2'><img src={house2} height="300" width="240" alt="house2"></img></div>
            <div className='house3'><img src={house3} height="300" width="240" alt="house3"></img></div>
            </div>
            <div className='d-flex'>
            <div className='house4'><img src={house4} height="290" width="240" alt="house4"></img></div>
            <div className='house5'><img src={house5} height="290" width="240" alt="house5"></img></div>
            </div>  
            <div className='house1_1'>Loream ipsum is simply dummy text of <br/>the printing and typesetting</div>
            <hr className='house1_2'></hr>
            <div className='house1_3'>13 March,2020</div>
            <div className='house1_4'>Contrarty to popular belief, Loream ipsum is not simply random text.<br/>
            It has roots in a piece of classical latin literature from</div>
            <div className='house2_1'>There are many variations of<br/>passages of Loream ipsum</div>
            <hr  className='house2_2'></hr>
            <div className='house2_3'>13 March,2020</div>
            <div className='house3_1'>There are many variations of<br/>passages of Loream ipsum</div>
            <hr  className='house3_2'></hr>
            <div className='house3_3'>13 March,2020</div>
            <div className='house4_1'>There are many variations of<br/>passages of Loream ipsum</div>
            <hr  className='house4_2'></hr>
            <div className='house4_3'>13 March,2020</div>
            <div className='house5_1'>There are many variations of<br/>passages of Loream ipsum</div>
            <hr className='house5_2'></hr> 
            <div className='house5_3'>13 March,2020</div>
            <div className='text-light cl'>
            <div className='every'>Every thing is about to change.</div>
            <div className='ever'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/>
             magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
             <div className='d-flex box'>
             <div><input type="email" className='email_1' placeholder='Email Address'></input></div>&emsp;
             <div><button className='button'>SUBCRIBE</button></div></div>
            </div>
            <div className='street'><img src={street} alt="street" height="350" width="1520"></img></div>
            <div className='d-flex'><div className='wpl'>wp/</div><div className='real'>Real Estate</div></div>
            <div className='title'>
                <div className='homes'>HOME</div>
                <div className='abouts'>ABOUT</div>
                <div className='agentss'>AGENTS</div>
                <div className='props'> PROPERTIES</div>
                <div className='blogs'>BLOG</div>
                <div className='contacts'>CONTACT</div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='d-flex'>
                <div className='detail1'>
                <div className='font_size'><b>ABOUT</b></div>
                <div className='font_color'>
                <div>ABOUT STUDIO</div>&nbsp;
                <div>JOBS</div>&nbsp;
                <div>TEAMS</div>&nbsp;
                <div>SECURITY</div>
                </div></div>
                <div className='detail2'>
                <div className='font_size'><b>INFORMATION</b></div>
                <div className='font_color'>
                <div>CUSTOMER SERVICE</div>&nbsp;
                <div>LEGAL INFORMATION</div>&nbsp;
                <div>SUPPORT</div>&nbsp;
                <div>FAQ</div>
                </div></div>
                <div className='detail3'>
                <div className='font_size'><b>RECENT NEWS</b></div>
                <div className='font_color'>
                <div className='d-flex'><img src={logo1} height="60px" alt="logo1"></img>&nbsp;Proin eros nisl ornare sed<br/>&nbsp; vehicula sit amet, feugiat<br/>&nbsp;Aug 12 | 2017</div>&nbsp;
                <div className='d-flex'><img src={logo2} height="60px" alt="logo2"></img>&nbsp;Morbi placerat accumsan <br/>&nbsp;nunc, luctus lacinia nis <br/>&nbsp;Aug 12 | 2017</div>
                </div></div>
                <div className='detail4'>
                    <div className='font_size'><b>GET IN TOUCH</b></div>
                    <div className='font_color'>
                    <div><VscDebugStackframeDot/>&nbsp;San Fransisco, CA<br/>&nbsp;&nbsp;125, california, STP 2 Building</div>&nbsp;
                    <div><VscDebugStackframeDot/>&nbsp;www.studiotheme.com</div>&nbsp;
                    <div><VscDebugStackframeDot/>&nbsp;+123 5645 8934</div>
                </div></div>
 

                </div> 
                <div className='bottom d-flex'>
                <div className='settings'><AiFillSetting size="30px"/></div>
                <div className='fb1'><TiSocialFacebookCircular size="30px"/></div>
                <div className='tw1'><TiSocialTwitterCircular size="32px"/></div>
                <div className='insta'><BsInstagram size="23px"/></div>
                <div className='privacy'>PRIVACY POLICY&nbsp;&nbsp;|&nbsp;&nbsp;TERMS AND CONDITIONS</div>
            </div>
        
        </div>
 
              
 
    ) 
} 
export default App1;