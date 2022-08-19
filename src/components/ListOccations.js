import styles from "./ListOccations.module.css"

const ListOccations = ({documents}) => {

  const test = documents[0].collections

  //let str = JSON.stringify(test, null, 4); // (Optional) beautiful indented output.
  //console.log(str); // Logs output to dev tools console.

  //console.log(Object.values(test))
  const slask = Object.values(test)

  const flat = slask.map( (x, index) => (
    <div key={index} className={styles.containerList} >
      <p className={styles.item}>{x[2]}</p>
      <p className={styles.item}>{x[0]}</p>
      <p className={styles.item}>{x[1]}</p>
    </div>
    ));

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

