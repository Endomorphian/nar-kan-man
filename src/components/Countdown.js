import  React, { useState , useEffect } from 'react'

import styles from "./Countdown.module.css"

export const Countdown = () => {

    var [date,setDate] = useState(40);
    
    useEffect(() => {
        if (date === 0) {setDate(59)}
        var timer = setInterval(()=>setDate(date + -1), 1000*60 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    }, [date]);

    return(
        <div className={styles.container}>
            <p>5h {date}m</p>
        </div>
    )
}

export default Countdown