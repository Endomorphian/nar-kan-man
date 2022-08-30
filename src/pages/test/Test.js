//import raw from './vitvin-labels.txt'
import Select from 'react-select'
import { useState } from 'react'
import vitvin from './Vitvin'
import { useImage } from '../../hooks/useImage';
import styles from "./Test.module.css"
import SyncLoader from "react-spinners/SyncLoader"

const Test = () => {

  const [imageDrink, setimageDrink] = useState("logo192.png")
  const [percent, setPercent] = useState("none")
  const [labelDrink, setlabelDrink] = useState("none")
  const [selectDrink, setSelectDrink] = useState("Cider")
  const { url, loading, error } = useImage('/cider_files/10492-Kopparbergs_Hjortron_Light.jpg')
  
  const handleChange = ({value}) => {
 
    let obj = vitvin.find(o => o.value === value);

    setimageDrink(obj.image)
    setlabelDrink(obj.label)
    setPercent(obj.percent)
}

  return (
    <div>

      <button className="btn" onClick={() => setSelectDrink("Cider")} >Cider</button>
      <button className="btn" onClick={() => setSelectDrink("Öl")} >Öl</button>
      <button className="btn" onClick={() => setSelectDrink("Sprit")} >Sprit</button>
      <button className="btn" onClick={() => setSelectDrink("Vin")} >Vin</button>

      { (selectDrink === "Cider") && 
        <Select
          options={vitvin}
          onChange={handleChange}
          defaultValue={{ label: "Cider" }} 
        />
      }

      <div className={styles.card}>
        { !error && (loading ? <SyncLoader color={"#E27396"} loading={loading} size={10} /> : <img src={url} alt="from db" height={100} />) }
        <p className={styles.child}> {labelDrink} {percent}%</p>
      </div>

      <h1 style={{marginTop: "20px"}}>CIDER ETC</h1>
      <div>
        {vitvin.slice(0, 20).map((item, index) => (
          <div className={styles.card} key={index}>
             <p className={styles.child}> {item.label} {item.percent}%</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Test

