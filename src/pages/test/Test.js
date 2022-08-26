//import raw from './ol-labels.txt'
import Select from 'react-select'
import { useState } from 'react'
import cider from './Cider.js'

import styles from "./Test.module.css"

const Test = () => {

  const [imageDrink, setimageDrink] = useState("logo192.png")
  const [percent, setPercent] = useState("none")
  const [labelDrink, setlabelDrink] = useState("none")

  const handleChange = ({value}) => {
 
    let obj = cider.find(o => o.value === value);

    setimageDrink(obj.image)
    setlabelDrink(obj.label)
    setPercent(obj.percent)
}

  return (
    <div>
      <Select 
        options={cider}
        onChange={handleChange} 
      />

      <div className={styles.card}>
        <img height={100} src={imageDrink} alt="logo" />
        <p className={styles.child}> {labelDrink} {percent}%</p>
      </div>

      <h1>CIDER ETC</h1>
      <div>
        {cider.map((item, index) => (
          <div className={styles.card} key={index}>
            <img height={100} src={item.image} alt="logo" />
            <p className={styles.child}> {item.label} {item.percent}%</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Test

