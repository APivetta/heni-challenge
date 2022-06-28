import { Print } from '../../types/Print'
import { PrintCard } from '../print-card/PrintCard'
import styles from './PrintList.module.css'

type PrintListProps = {
  prints: Print[]
}

export const PrintList = ({ prints } : PrintListProps) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {prints.map(print => <PrintCard key={print.id} print={print} />)}
    </div>
  </div>
)
