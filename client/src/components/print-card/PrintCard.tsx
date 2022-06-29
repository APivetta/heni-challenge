import { useNavigate } from 'react-router-dom'
import { Print as PrintType } from '../../types/Print'
import { getPrintAuthors } from '../../utils/getPrintAuthor'
import styles from './PrintCard.module.css'

type PrintsProps = {
  print: PrintType
}

export const PrintCard = ({ print } : PrintsProps) => {
  const navigate = useNavigate()
  const {
    primaryimageurl,
    title,
    technique,
    century,
    culture,
    rank,
    id
  } = print

  const onMoreDetails = () => {
    navigate(`/print/${id}`, { replace: false })
  }

  const authors = getPrintAuthors(print)

  return (
    <div className={styles.container} data-testid='print-card'>
      <div className={styles.frame}>
        <img className={styles.image} src={primaryimageurl ?? undefined} alt={title ?? undefined} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{title}{authors && ` — ${authors}`}</h1>
        {technique && <p className={styles.description}>{technique}</p>}
        <p className={styles.description}>{century} - {culture}</p>
        <p className={styles.description}>Rank: {rank}</p>
      </div>
      <button className={styles.button} onClick={onMoreDetails}>More Details</button>
    </div>
  )
}
