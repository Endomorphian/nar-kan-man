import React from 'react'
import styles from "./Knapp.module.css"
import { Link } from 'react-router-dom';

const Knapp = ({color, text, page}) => {
  const handleClick = () => {
    console.log("Click!")
  }

  return (
    <div>
      <Link to={page} >
        <button 
          className={[styles.black, `${(color === "white") ? styles.white : ''}`].join(' ')}
          onClick={handleClick}>
          { text }  
        </button>
      </Link>
    </div>
  )
}

export default Knapp