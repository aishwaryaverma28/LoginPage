import React from 'react'
import LoginForm from './LoginForm'
import FreeTrail from './FreeTrail'
import styles from "./Styles/Body.module.css"

const Body = () => {
  return (
    <main className={styles.MainBody}>
        <FreeTrail/>
        <LoginForm/>
    </main>
  )
}

export default Body