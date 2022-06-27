import { ReactNode } from 'react'
import styles from './BasePage.module.css'

export const BasePage = ({ children } : { children: ReactNode }) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h2>HENI Full-Stack Challenge</h2>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
