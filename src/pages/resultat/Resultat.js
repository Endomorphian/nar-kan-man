import Knapp from "../../components/Knapp"
import styles from "./Resultat.module.css"
import { useState, useEffect } from "react"
import Countdown from "../../components/Countdown";
import Chart from "../../components/Chart";

const Resultat = () => {

  // --> PPM + Sluttid + weight + gender

  const [starttime, setStarttime] = useState(new Date())
  const [endtime, setEndtime] = useState(new Date())
  const [ppm, setPpm] = useState(1)
  const [weight, setWeight] = useState(null)
  const [gender, setGender] = useState(null)
  
  const [period, setPeriod] = useState(1.7)

  // CHART DATA
  const generateChartData = () => {
    
    let datum = Date.parse(endtime)

    console.log("milli", datum)

    const data = []
    let ppm = 0.5 / 10 // KOLLA EKVATIONERNA OCH ENHETERNA!!! Should start at ppm, not ppm -0.015
    let intialPpm = ppm
    const metabolism = -0.015 / 6
    let timeString = ""
    let chartLine = ""
    let chartBoolean = false

    while (ppm > 0) {
      let temp = new Date(datum)
      
      timeString = temp.getHours().toString() + ":" + temp.getMinutes().toString()
      timeString = timeString.replace(/\s/g, '');

      // Data for the ReferenceLine in Chart FIX 0.02 VALUE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      if (ppm < 0.02 && chartBoolean === false) { 
        chartLine = timeString
        chartBoolean = true
      }

      data.push({
        date: timeString,
        value: ppm.toFixed(3)
      })

      datum += 1000 * 600
      ppm += metabolism

    }

    return {data, chartLine, intialPpm}
  }

  // Reurn period of drinking in hours
  const calculateTime = () => {
    const diff = endtime.valueOf() - starttime.valueOf()
    console.log(diff, "diff")
  
    let minutes = Math.floor((Math.floor(diff / 1000)) / 60) 
    let hours = Math.floor(minutes / 60) 
  
    minutes = minutes % 60
    hours = hours % 24
  
    //setPeriod(hours + (minutes * (1/60)))
    console.log(hours + (minutes * (1/60)), "hours")
  }
  //-------------------------

  // Should get real data from Main
  const widmarksFormula = (alcohol) => {
    // BAC = [Alcohol consumed in grams / (Body weight in grams x R)] X 100
    // everyone metabolizes alcohol at the same rate???.015 an hour

    let genderConstant = 0
    const metabolize = -0.015

    gender === 'f' ? genderConstant = 0.55 : genderConstant = 0.68
 
    let BAC = (alcohol / ( weight * 1000 * genderConstant)) * 100

    BAC = BAC + (period * metabolize)
    console.log("BAC:", BAC)

    return BAC
  }
  //-------------------------

  //Should get real data
  const whenToDrive = (BAC) => {
    const swedishAlcoholLimit = 0.2 // promille i blodet
    const metabolize = -0.015
    let atLimit = (swedishAlcoholLimit - BAC) / metabolize
    
    return (atLimit > 0) ? atLimit : 0
  }
  //-------------------------

    // Get data from localstore
  useEffect(() => {
    setStarttime(new Date(Date.parse(localStorage.getItem("time"))))
    setEndtime(new Date(Date.parse(localStorage.getItem("endtime"))))
    setPpm(localStorage.getItem("ppm"))
    setGender(localStorage.getItem("gender"))
    setWeight(localStorage.getItem("weight"))
  }, [])
  //-------------------------

  let { data, chartLine, intialPpm } = generateChartData()

  calculateTime()
  console.log(whenToDrive(widmarksFormula(ppm)), "timmar")

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>Du kan k??ra om:</p>
        <Countdown />
      </div>

      <Chart data={ data } chartLine={ chartLine } intialPpm={ intialPpm } />

      <div className={styles.box}>
        <h1>T??nk p??!</h1>
        <p>Disclaimer ...</p>
      </div>

      <Knapp text="Tillbaka" page="/"/>

      <p>{ starttime.toString() }</p>
      <p>{ endtime.toString() }</p>
      <p>ppm: { ppm }</p>
      <p>gender: { gender }</p>
      <p>weight: { weight }</p>
    </div>
  )
}

export default Resultat