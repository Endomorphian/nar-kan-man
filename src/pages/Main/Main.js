import { useState, useEffect } from "react"
import Knapp from "../../components/Knapp"
import List from "../../components/List"
import Selector from "../../components/Selector"
import SelectorNumber from "../../components/SelectorNumber"
import SelectorTime from "../../components/SelectorTime"

import styles from "./Main.module.css"

const Main = () => {

    if (!localStorage.getItem('time')) { localStorage.setItem('time', new Date().toISOString()) }
    if (!localStorage.getItem('ppm')) { localStorage.setItem('ppm', 10.666) }

    const [starttime, setStarttime] = useState(localStorage.getItem('time'))
    const [weight, setWeight] = useState(localStorage.getItem('weight'))
    const [gender, setGender] = useState(localStorage.getItem("gender"))
    const [ppm, setPpm] = useState(localStorage.getItem("ppm"))

    // Get values and update: TIME -----------------------------------------------
    const callbackTime = (value) => {
        setStarttime(value.toString())
        localStorage.setItem('time', starttime)
    }

    useEffect(() => {
        localStorage.setItem('time', starttime)
        localStorage.setItem('endtime', new Date().toISOString())

    }, [starttime])
    //----------------------------------------------------------------------------

    // Get values and update: WEIGHT ---------------------------------------------
    const callbackWeight = (value) => {
        setWeight(value)
        localStorage.setItem('weight', weight)
    }

    useEffect(() => {
        localStorage.setItem('weight', weight) 

    }, [weight])
    //-----------------------------------------------------------------------------

    // Get values and update: GENDER ----------------------------------------------
    const callbackGender = (value) => {
        setGender(value)
        localStorage.setItem('gender', gender)
    }

    useEffect(() => {
        localStorage.setItem('gender', gender) 

    }, [gender, localStorage])

    useEffect(() => {
        localStorage.getItem('gender', gender) 
    }, [gender])
    //----------------------------------------------------------------------------

    // ACHOHOL -------------------------------------------------------------------
    useEffect(() => {
        localStorage.setItem('ppm', 600) 

    }, [ppm, localStorage])

    // ---------------------------------------------------------------------------

  return (
    <div className={ styles.main }>
        <div className={ styles.properties }>
            <SelectorTime color = "#EFCFE3" prop="STARTTID" callback={callbackTime} start={starttime}/>
            <SelectorNumber color="#EAF2D7" prop="VIKT" callback={callbackWeight} weight={weight} />
            <Selector color="#B3DEE2" prop="KÖN" callback={callbackGender} gender={gender} />
        </div>
        <div className={ styles.beverage }>
            <Knapp text="Dryck" color="white" page="/drycker" />
        </div>
        <div className={ styles.list }>
            <List />
        </div>
        <div className={ styles.bottom }>
            <Knapp text="Resultat" page="/resultat"/>
        </div>

        <div>
            <p>Time: { starttime } </p>    
            <p>type: { typeof starttime} </p>
            <p>Weight: { weight } </p>
        </div>
    </div>
  )
}

export default Main

