import { Print as PrintType } from '../../types/Print'
import styles from './PrintCard.module.css'

type PrintsProps = {
  print: PrintType
}

export const PrintCard = ({ print } : PrintsProps) => {
  const {
    primaryimageurl,
    title,
    technique,
    century,
    culture,
    people,
    rank
  } = print

  const authors = people
    .filter(({ role, name }) => role === 'Artist' && name)
    .map(artist => artist.name)
    .join(', ')
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img className={styles.image} src={primaryimageurl} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{title}{authors && ` — ${authors}`}</h1>
        {technique && <p className={styles.description}>{technique}</p>}
        <p className={styles.description}>{century} - {culture}</p>
        <p className={styles.description}>Rank: {rank}</p>
      </div>
      <button className={styles.button}>More Details</button>
    </div>
  )
}
