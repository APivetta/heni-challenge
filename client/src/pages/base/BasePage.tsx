import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './BasePage.module.css'

export const BasePage = ({ children } : { children: ReactNode }) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h2>HENI Full-Stack Challenge</h2>
        <Link to='/' className={styles.homeLink}><h3>Home</h3></Link>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
