import Knapp from "../../components/Knapp"
import List from "../../components/List"
import Selector from "../../components/Selector"
import SelectorNumber from "../../components/SelectorNumber"
import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={ styles.main }>
        <div className={ styles.properties }>
            <SelectorNumber color="#EFCFE3" prop="ÅLDER" />
            <SelectorNumber color="#EAF2D7" prop="VIKT" />
            <Selector color="#B3DEE2" prop="KÖN" />
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
    </div>
  )
}

export default Main