import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import Knapp from '../../components/Knapp'
import styles from "./Settings.module.css"

const Settings = () => {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.parameters}>
        <div>Namn</div>
        <div>Ålder</div>
        <div>Vikt</div>
        <div>Kön</div>
      </div>
      {user && (
        <li>
          {!isPending && <button className="btn" onClick={logout}>Logout</button>}
          {isPending && <button className="btn" disabled>Logging out...</button>}
        </li>
      )}
      <Knapp text="Tillbaka" page="/"/>
    </div>
  )
}

export default Settings