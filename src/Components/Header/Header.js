import React from 'react'
import "./Header.css";

function Header() {
 return (
    <div className='header'>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <nav class="main-nav">
          <a href="#"><i className='fa fa-home'></i></a>
          <a href="#tvshows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#latest">Latest</a>
          <a href="#mylist">My List</a>
        </nav>
        <nav class="sub-nav">
        <a href="#"><i className='fa fa-search'></i></a>
        <a href="#"><i className='fa fa-gift'></i></a>
        <a href="#"><i className='fa fa-bell'></i></a>
        </nav>
        <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
    
  )
}

export default Header
