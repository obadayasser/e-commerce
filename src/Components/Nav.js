import React from 'react'
import Logo from '../Assests/logo.png'
import Bg from '../Assests/bg.png'
const Nav = () => {
  return (
<div className='Body'>
<div className='container'>
    
      <ul className="nav nav-underline">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Proudact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Categories</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">SALE</a>
  </li>

</ul>
 <div className='logo'>

 <img src={Logo}></img>

 </div>
 <div className='search'>
<input type='text' placeholder='search'></input>
<i id='a1' className="fa-solid fa-magnifying-glass"></i>
<i id='a2' className="fa-solid fa-lock"></i>
<i id='a3' className="fa-regular fa-user"></i>

 </div>
    </div>
    <div className='bg'>

        <img src={Bg}></img>
    </div>
</div>
  )
}

export default Nav
