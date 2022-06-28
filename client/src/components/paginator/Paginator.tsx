import styles from './Paginator.module.css'
import cx from 'classnames'

type PaginatorProps = {
  page: number
  totalPages: number,
  onNext: () => void,
  onPrevious: () => void,
}

export const Paginator = ({ page, totalPages, onNext, onPrevious } : PaginatorProps) => {
  const nextEnabled = page < totalPages
  const previousEnabled = page > 1

  return (
    <div className={styles.container}>
      <button className={cx([styles.button, { [styles.buttonActive]: previousEnabled }])} onClick={onPrevious} disabled={!previousEnabled}>{'< previous'}</button>
      <p>Page {page} of {totalPages}</p>
      <button className={cx([styles.button, { [styles.buttonActive]: nextEnabled }])} onClick={onNext} disabled={!nextEnabled}>{'next >'}</button>
    </div>
  )
}
