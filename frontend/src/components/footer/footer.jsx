import './footer.css'
import React from "react";

// export default function Footer () {
//     return (
//         <div className='footer'>
//             <div className='footer-links'>
//                 <a href='www.facebook.com'><i class="fa-brands fa-facebook fa-3x"></i></a>
//                 <a href='www.twitter.com'><i class="fa-brands fa-twitter fa-3x"></i></a>
//                 <a href='www.instagram.com'><i class="fa-brands fa-instagram fa-3x"></i></a>
                
//             </div>
//         </div>
//     )


const Footer = () => (
  <div className="footer">
    <p>  
        <a href='www.facebook.com'><i class="fa-brands fa-facebook fa-2x"swapOpacity></i></a> &nbsp;
         <a href='www.twitter.com'><i class="fa-brands fa-twitter fa-2x"swapOpacity></i></a> &nbsp;       
        <a href='www.instagram.com'><i class="fa-brands fa-instagram fa-2x"swapOpacity></i></a>
        </p>
  </div>
);


export default Footer;
