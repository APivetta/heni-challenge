import { Print as PrintType } from '../../types/Print'
import { getPrintAuthors } from '../../utils/getPrintAuthor'
import styles from './PrintDetails.module.css'

type PrintsProps = {
  print: PrintType
}

export const PrintDetails = ({ print } : PrintsProps) => {
  const authors = getPrintAuthors(print)

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img className={styles.image} src={print.primaryimageurl ?? undefined} alt={print.title ?? undefined} />
      </div>
      <div className={styles.detailsContainer}>
        <h1>{print.title}</h1>
        <h2>{authors}</h2>
        <hr />
        <h2>Details</h2>
        {print.technique && <p><strong>Technique:</strong> {print.technique}</p>}
        {print.dimensions && <p><strong>Dimensions:</strong> {print.dimensions}</p>}
        {print.dated && <p><strong>Dated:</strong> {print.dated}</p>}
        {print.century && <p><strong>Century:</strong> {print.century}</p>}
        {print.culture && <p><strong>Culture:</strong> {print.culture}</p>}
        {print.division && <p><strong>Division:</strong> {print.division}</p>}
        {print.contact && <p><strong>Contact:</strong> {print.contact}</p>}
        {print.creditline && <p><strong>Credit:</strong> {print.creditline}</p>}

        {print.people && print.people?.length > 0 && (
          <>
            <hr />
            <h2>People</h2>
            {print.people.map(person => <p key={person.personid}><strong>{person.role}:</strong> {person.displayname}</p>)}
          </>
        )}

        {print.colors && print.colors?.length > 0 && (
          <>
            <hr />
            <h2>Colors</h2>
            <div className={styles.colorContainer}>
              {print.colors.map(({ color }, i) => <div key={i} className={styles.color} style={{ backgroundColor: color ?? undefined }} />)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
