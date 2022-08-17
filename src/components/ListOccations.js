import styles from "./ListOccations.module.css"

const ListOccations = () => {
  const occations = [
    {
      place: "Mossens", 
      ppm: "1.4", 
      date: "2021-04-21"
    },
    {
      place: "Via Venetio", 
      ppm: "1.0", 
      date: "2021-07-02"
    },
    {
      place: "Sannegården", 
      ppm: "0.7", 
      date: "2021-10-13"
    },
    {
      place: "Deniz Pizzeria", 
      ppm: "2.1", 
      date: "2022-03-21"
    }
  ]

  return (
    <div className={styles.outer}>
        <div className={styles.containerRubrik}>
          <div className={styles.rubrik}>Plats</div>
          <div className={styles.rubrik}>‰</div>
          <div className={styles.rubrik}>Datum</div>
        </div>

      <div className={styles.wrap}>
        {occations.map((occ, index) => (
          <div key={index} className={styles.containerList}>
            <p className={styles.item}>{occ.place}</p>
            <p className={styles.item}>{occ.ppm}</p>
            <p className={styles.item}>{occ.date}</p>
          </div>
        ))}
      </div>
    </div>
    )
  
}

export default ListOccations

