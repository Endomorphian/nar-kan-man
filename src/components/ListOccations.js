import styles from "./ListOccations.module.css"

const ListOccations = ({documents}) => {

  const db = documents[0].collections

  const formatted = Object.values(db)

  const flat = formatted.map( (x, index) => (
    <div key={index} className={styles.containerList} >
      <p className={styles.item}>{x[2]}</p>
      <p className={styles.item}>{x[0]}</p>
      <p className={styles.item}>{x[1]}</p>
    </div>
    ))

  return (
    <div className={styles.outer}>
        <div className={styles.containerRubrik}>
          <div className={styles.rubrik}>Plats</div>
          <div className={styles.rubrik}>‰</div>
          <div className={styles.rubrik}>Datum</div>
        </div>

      <div className={styles.wrap}>
        {flat}
      </div>
    </div>
    )
}

export default ListOccations

