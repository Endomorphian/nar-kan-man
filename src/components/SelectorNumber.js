import './Selector.css'

import { useState } from 'react'

const SelectorNumber = ({ color, prop, callback, weight }) => {

  const [vikt, setVikt] = useState(20)

    const handleSubmit = (e) => {
      e.preventDefault()
      callback(vikt)
      console.log(vikt)
    }

  return (
    <div style={{ backgroundColor: color}} className="outer">
        <div >{prop}</div>
        <div className="selector">

          <form className="form" onSubmit={handleSubmit} >
            <label>
              <input
                placeholder={weight}
                required 
                type="number"
                onChange={(e)=> setVikt(e.target.value)}
              />   
            </label>
            <button className='btn'>press</button>
          </form>

        </div>
    </div>
  )
}

export default SelectorNumber



