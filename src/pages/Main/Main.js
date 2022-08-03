import Selector from "../../components/Selector"
import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={ styles.main }>
        <div className={ styles.top }>
            <div style={{backgroundColor: 'green'}}>När kan jag köra?</div>
            <div style={{backgroundColor: 'yellow'}}>
                <div>Icon</div>
                <div>Username</div>
            </div>
        </div>
        <div className={ styles.properties }>
            <Selector color="#EFCFE3" prop="ÅLDER" />
            <Selector color="#EAF2D7" prop="VIKT" />
            <Selector color="#B3DEE2" prop="KÖN" />
        </div>
        <div className={ styles.beverage }>
            <button>Dryck</button>
        </div>
        <div className={ styles.list }>
            List
        </div>
        <div className={ styles.bottom }>
            <button>Resultat</button>
        </div>
    </div>
  )
}

export default Main