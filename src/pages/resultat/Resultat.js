import Knapp from "../../components/Knapp"
import styles from "./Resultat.module.css"
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid,
 } from 'recharts';
import Countdown from "../../components/Countdown";

const Resultat = () => {
  const data = [
    {
      date: "15:00",
      value: "0.2"
    },
    {
      date: "16:00",
      value: "0.6"
    },
    {
      date: "16:45",
      value: "0.75"
    },
    {
      date: "17:23",
      value: "0.56"
    },
    {
      date: "04:34",
      value: "0.0"
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>Du kan köra om:</p>
        <Countdown />
      </div>
      
      <ResponsiveContainer className={styles.graph} width="100%" height={300} >
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#544"/>
              <stop offset="75%" stopColor="#568"/>
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#000" fill="url(#color)" />

          <XAxis dataKey="date" />

          <YAxis dataKey="value" width={25} />

          <CartesianGrid opacity={0.4} vertical={false} />
          
        </AreaChart>
      </ResponsiveContainer>

      <div className={styles.box}>
        <h1>Tänk på!</h1>
        <p>Disclaimer ...</p>
      </div>

      <Knapp text="Tillbaka" page="/"/>
    </div>
  )
}

export default Resultat