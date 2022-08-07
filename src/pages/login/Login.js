import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import Knapp from '../../components/Knapp'
import { Link } from 'react-router-dom'

import styles from './Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isPending, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <>
    <form className='auth-form' onSubmit={handleSubmit} >
    <div className={styles.choice}>
      <h2>Login &nbsp;| &nbsp;</h2>
      <Link to="/signup"><h2 style={{color: "grey"}}>Signup</h2></Link>
    </div>
      <label>
        <span>Email</span>
        <input
          required 
          type="email"
          onChange={(e)=> setEmail(e.target.value)}
        />   
      </label>
      <label>
        <span>Password</span>
        <input
          required 
          type="password"
          onChange={(e)=> setPassword(e.target.value)}
        />  
      </label>
      {isPending && <button className='btn' disabled>Loading...</button>}
      {!isPending && <button className='btn'>Login</button>}

      {error && <div className='error'>{error}</div>}
      <Knapp text="Tillbaka" page="/" />
    </form>
    </>
  )
}

export default Login