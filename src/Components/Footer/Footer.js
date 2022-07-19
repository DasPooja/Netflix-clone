import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <div className='footer'>
      <div className='links'>
      <div class="logos">
        <a href="#"><i class="fa fa-facebook-square"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-twitter "></i></a>
        <a href="#"><i class="fa fa-youtube "></i></a>
      </div>
      <div class="sub-links">
        <ul>
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      </div>
      <div className='text'><p>&copy 1997-2022 Netflix, Inc.</p>
      <p>&copy Netflix India</p></div>
    </div>
  )
}

export default Footer
