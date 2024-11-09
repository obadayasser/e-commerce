import React, { useEffect, useState } from 'react'
import { signInWithPopup } from 'firebase/auth';
import firebaseConfig from './Firebase';
const Form = () => {
  const {auth, provider} = firebaseConfig;
  const [value, setValue] = useState("")
const handle = ()=>{
  signInWithPopup(auth,provider).then((data)=>{
    setValue(data.user.email)
    localStorage.setItem("email",data.user.email)
  })
}
useEffect(()=>{
  setValue(localStorage.getItem('email'))
},[])



  return (
    <div className='forms'>
        <div className='form-right'>
    <h1>Get more benefits 
by Sign Up & Join 
Mejiwoo Community!</h1>
<h2><i class="fa-solid fa-diamond"></i>FREE Special Gift to a new member</h2>
<h2><i class="fa-solid fa-diamond"></i>Get 2x JIWOO Points to purchase items</h2>
<h2><i class="fa-solid fa-diamond"></i>Get special voucher code every month </h2>
<h2><i class="fa-solid fa-diamond"></i>Claim Voucher Disc. Up To 50% </h2>

        </div>
        
        <div className='form-left'>
<div className='inputs'>
<input placeholder='Full Name' type='text'/>
          <input placeholder='Email Adress' type='email'/>
          <input placeholder='Password' type='password'/>
</div>
<div className="snap">
  <span className="sp"></span> or <span className="sp"></span>
</div>

<div className='google'>
  <button onClick={handle}><i class="fa-brands fa-google"></i>SIGN UP WITH GOOGLE  </button>
</div>
        </div>
      
    </div>
  )
}

export default Form
