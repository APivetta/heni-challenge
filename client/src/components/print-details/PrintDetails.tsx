import { Print as PrintType } from '../../types/Print'
import styles from './PrintDetails.module.css'

type PrintsProps = {
  print: PrintType
}

export const PrintDetails = ({ print } : PrintsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img className={styles.image} src={print.primaryimageurl} />
      </div>
      <div className={styles.detailsContainer} />
    </div>
  )
}
