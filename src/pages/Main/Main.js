import { useState, useEffect } from "react"
import Knapp from "../../components/Knapp"
import List from "../../components/List"
import Selector from "../../components/Selector"
import SelectorNumber from "../../components/SelectorNumber"
import SelectorTime from "../../components/SelectorTime"

import styles from "./Main.module.css"

const Main = () => {

    const [starttime, setStarttime] = useState(localStorage.getItem('time'))
    const [weight, setWeight] = useState(localStorage.getItem('weight'))
    const [gender, setGender] = useState(localStorage.getItem('gender'))

    // Get values and update: time
    const callbackTime = (value) => {
        setStarttime(value)
        localStorage.setItem('time', starttime)
        console.log(starttime)
    }

    useEffect(() => {
        localStorage.setItem('time', starttime) 

    }, [starttime])

    // Get values and update: weight
    const callbackWeight = (value) => {
        setWeight(value)
        localStorage.setItem('weight', weight)
        console.log(weight)
    }

    useEffect(() => {
        localStorage.setItem('weight', weight) 

    }, [weight])

    // Get values and update: gender
    const callbackGender = (value) => {
        setGender(value)
        localStorage.setItem('gender', gender)git 
    }

    useEffect(() => {
        localStorage.setItem('gender', gender) 

    }, [gender])
    

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
            {starttime.toString()}
        </div>
        <div>
            {weight}
        </div>
        <div>
            {gender}
        </div>

    </div>
  )
}

export default Main

