import './Selector.css'

import { useState } from 'react'

const SelectorNumber = ({ color, prop }) => {

  const [age, setAge] = useState(20)

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(age)
    }

  return (
    <div style={{ backgroundColor: color}} className="outer">
        <div >{prop}</div>
        <div className="selector">

          <form className='auth-form' onSubmit={handleSubmit} >
            <label>
              <input
                required 
                type="number"
                onChange={(e)=> setAge(e.target.value)}
              />   
            </label>
            <button>press</button>
          </form>

        </div>
    </div>
  )
}

export default SelectorNumber



