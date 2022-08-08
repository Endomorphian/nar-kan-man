import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import Knapp from '../../components/Knapp'
import { useCollection } from '../../hooks/useCollection'

import styles from "./Settings.module.css"
import { Link } from 'react-router-dom'

const Settings = () => {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  const { error, documents } = useCollection('users', ["id", "==", user.uid])

  return (
    
    <div className={styles.container}>
      {error && <p>{error}</p>}

      {documents && documents.map((doc) => (
        <div key="doc.id" className={styles.section} >
          <div>Namn: {doc.displayName}</div>
          <div>{doc.age} år</div>
          <div>{doc.weight} kg</div>
          <div>{doc.gender}</div>
        </div>
      ))}
      
      <Knapp text="Tillbaka" page="/"/>

      {user && (
        <div className={styles.section}>
          <Link to="/">{!isPending && <button className="btn" onClick={logout}>Logout</button>}</Link>
          {isPending && <button className="btn" disabled>Logging out...</button>}
        </div>
      )}

    </div>
  )
}

export default Settings