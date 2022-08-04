import React from 'react'
import styles from "./Knapp.module.css"
import { Link } from 'react-router-dom';

const Knapp = ({color, text}) => {
  const handleClick = () => {
    console.log("Click!")
  }

  return (
    <div>
      <Link to="/create" >
        <button 
          className={styles.knapp}
          onClick={handleClick}>
          { text }  
        </button>
      </Link>
    </div>

  )
}

export default Knapp