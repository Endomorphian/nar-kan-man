import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

import { FcEngineering } from 'react-icons/fc';

// styles & images
import styles from "./Navbar.module.css"

export default function Navbar() {
  const { user } = useAuthContext()

  return (
    <>
      <div className={ styles.top }>
        <div className={styles.title}>När kan jag köra?</div>
        <div className={styles.icon}>
          <div><FcEngineering size="1.2rem"/></div>
          <div>{user ? <Link to="/settings">{user.displayName}</Link> : <Link to="/login">Gäst</Link> }</div>
        </div>
      </div>
    </>
  )
}
