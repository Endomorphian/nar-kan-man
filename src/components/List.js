import styles from "./List.module.css"
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";

const List = () => {

  const [drycker, setDrycker] = useState([
    {
      titel: "Borg Brugghús",
      procent: "4%",
      tid: "5:56"
    }, 
    {
      titel: "Armand de Brignac",
      procent: "14%",
      tid: "2:23"
    }, 
    {
      titel: "Port Ellen 40th",
      procent: "40%",
      tid: "3:08"
    },
    {
      titel: "Carlsberg",
      procent: "5%",
      tid: "3:06"
    }, 
    {
      titel: "Ramos",
      procent: "13%",
      tid: "9:00"
    },  
  ])

  const handleDelete = (item) => {
    console.log("?", item)
    const newList = drycker.filter((dryck) => dryck.titel !== item);
    setDrycker(newList);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.itemOne}>TITEL</div>
        <div className={styles.itemTwo}>%</div>
        <div className={styles.itemThree}>TID</div>
        <div className={styles.itemFour}></div>
      </div>

      {drycker.map(data => (
        <div className={styles.lista} key={data.titel}>
          <div className={styles.itemOne}>
            {data.titel} 
          </div>
          <div className={styles.itemTwo}>
            {data.procent} 
          </div>
          <div className={styles.itemThree}>
            {data.tid} 
          </div>
          <div className={styles.itemFour}>
            <MdDeleteOutline size="1.5rem" onClick={() => handleDelete(data.titel)}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List