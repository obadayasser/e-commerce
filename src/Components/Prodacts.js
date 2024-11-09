import React from 'react'
import bs1 from '../Assests/asb.png'
import bs2 from '../Assests/asb2.png'
const Prodacts = () => {
  return (
    <div className='coleec'>
      <h1>All Products</h1>
 <div className='container'>

<div className='bg-pro'>
<div className='imgs-products'>
    <div className='enda2'> 

      <img src={bs1} className="rounded float-center" alt="..."/>
      <div className='enda'>
      <h4>Eto V Neck Yellow</h4>
      <p>Rp. 129.000</p>
</div>
    </div>
    <div className='enda2'>

    <img src={bs1} className="rounded float-center" alt="..."/>
<div className='enda'>
<h4>Eto V Neck Yellow</h4>
<p>Rp. 129.000</p>
</div>
    </div>
    <div className='enda2'>

    <img src={bs1} className="rounded float-center" alt="..."/>
    <div className='enda'>
    <h4>Eto V Neck Yellow</h4>
    <p>Rp. 129.000</p>
</div>
    </div>

      </div>
 <div className='imgs-products'>
    <div className='enda2'> 

      <img src={bs2} className="rounded float-center" alt="..."/>
      <div className='enda'>
      <h4>Eto V Neck Yellow</h4>
      <p>Rp. 129.000</p>
</div>
    </div>
    <div className='enda2'>

    <img src={bs2} className="rounded float-center" alt="..."/>
<div className='enda'>
<h4>Eto V Neck Yellow</h4>
<p>Rp. 129.000</p>
</div>
    </div>
    <div className='enda2'>

    <img src={bs2} className="rounded float-center" alt="..."/>
    <div className='enda'>
    <h4>Eto V Neck Yellow</h4>
    <p>Rp. 129.000</p>
</div>
    </div>

      </div>
</div>
<div className='see-more'>
<button>SEE MORE <i class="fa-solid fa-arrow-right"></i></button>


</div>

 </div>
    </div>
  )
}

export default Prodacts
