import React from 'react'
import ba1 from '../Assests/ba1.png'
import ba2 from '../Assests/ba2.png'
import ba3 from '../Assests/ba3.png'
const Collections = () => {
  return (
    <div className='coleec'>
      <h1>Season Collections</h1>
 <div className='container'>

 <div className='imgs'>

    <div className='enda2'>

    <img src={ba1} className="rounded float-center" alt="..."/>
<div className='enda'>
<h3>Hoodie</h3>
<button>more</button>
</div>
    </div>
    <div className='enda2'>

    <img src={ba2} className="rounded float-center" alt="..."/>
<div className='enda'>
<h3>Jacket</h3>
<button>more</button>
</div>
    </div>
    <div className='enda2'>

    <img src={ba3} className="rounded float-center" alt="..."/>
    <div className='enda'>
<h3>Pullover</h3>
<button>more</button>
</div>
    </div>

      </div>
 </div>
    </div>
  )
}

export default Collections
