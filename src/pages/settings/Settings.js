import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import { Link } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

import Knapp from '../../components/Knapp'
import SyncLoader from "react-spinners/SyncLoader"
import ListOccations from '../../components/ListOccations'

import styles from "./Settings.module.css"


const Settings = () => {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  const { error, documents } = useCollection('users', ["id", "==", user.uid])

  const handleClick = () => {
    projectFirestore.collection('users').doc(user.uid).update({
      "collections.Deniz" : ["6ppm", "7 Januari", "SanneX"]
    })
    console.log("clicked me!")
  }

  return (
    
    <div className={styles.container}>
      {error && <p>{error}</p>}

      <div className={styles.wrap}>
        <div className={styles.username}>
          <SyncLoader color={"#EA9AB2"} loading={!documents} size={10} />
          {documents && documents[0].displayName}
        </div>
        <div className={styles.weight}>
          <SyncLoader color={"#E27396"} loading={!documents} size={10} />
          {documents && <p>{documents[0].weight} kg</p>}
        </div>
        <div className={styles.gender}>
          <SyncLoader color={"#EAF2D7"} loading={!documents} size={10} />
          {documents && documents[0].gender}
        </div>
      </div>

      {documents && <ListOccations documents={documents} /> }
      
      <Knapp text="Tillbaka" page="/"/>

      {user && (
        <div className={styles.section}>
          <Link to="/">{!isPending && <button className="btn" onClick={logout}>Logout</button>}</Link>
          {isPending && <button className="btn" disabled>Logging out...</button>}

          <div>
            <button onClick={handleClick}>UPDATE</button>
          </div>
          
        </div>
      )}

    </div>
  )
}

export default Settings