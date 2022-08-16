import Knapp from "../../components/Knapp"
import styles from "./Resultat.module.css"

import Countdown from "../../components/Countdown";
import Chart from "../../components/Chart";

const Resultat = () => {

  const generateChartData = () => {
    let datum = new Date().getTime()

    console.log("milli", datum)

    const data = []
    let ppm = 1.5 / 10 //KOLLA EKVATIONERNA OCH ENHETERNA!!! Should start at ppm, not ppm -0.015
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
        console.log("chartLine", chartLine)
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

  //Should get real data from Main
  const calculateTime = () => {
    const start = new Date()
    const end = new Date()
  
    end.setHours( end.getHours() + 2 )
    end.setMinutes( end.getMinutes() + 15 )
    const diff = end.valueOf() - start.valueOf()
  
    let minutes = Math.floor((Math.floor(diff / 1000)) / 60) 
    let hours = Math.floor(minutes / 60) 
  
    minutes = minutes % 60
    hours = hours % 24
  
    console.log(hours, "h", minutes, "m")
  }

  //Should get real data from Main
  const widmarksFormula = (weight = 81.6, gender = 'm', alcohol = 100, period = 2) => {
    // BAC = [Alcohol consumed in grams / (Body weight in grams x R)] X 100
    // everyone metabolizes alcohol at the same rate–.015 an hour

    let genderConstant = 0
    const metabolize = -0.015

    gender === 'f' ? genderConstant = 0.55 : genderConstant = 0.68
 
    let BAC = (alcohol / ( weight * 1000 * genderConstant)) * 100

    BAC = BAC + (period * metabolize)

    return BAC
  }

  //Should get real data
  const whenToDrive = (BAC) => {
    const swedishAlcoholLimit = 0.2 // promille i blodet
    const metabolize = -0.015
    let atLimit = (swedishAlcoholLimit - BAC) / metabolize
    
    return (atLimit > 0) ? atLimit : 0
  }

  calculateTime()
  console.log(widmarksFormula())
  console.log(whenToDrive(widmarksFormula()), "timmar")

  let { data, chartLine, intialPpm } = generateChartData()

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>Du kan köra om:</p>
        <Countdown />
      </div>

      <Chart data={ data } chartLine={ chartLine } intialPpm={ intialPpm } />

      <div className={styles.box}>
        <h1>Tänk på!</h1>
        <p>Disclaimer ...</p>
      </div>

      <Knapp text="Tillbaka" page="/"/>
    </div>
  )
}

export default Resultat