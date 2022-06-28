import { useQuery } from '@apollo/client'
import { Navigate, useParams } from 'react-router-dom'
import { BasePage } from '../base/BasePage'
import { GET_PRINT_QUERY, GetPrintData, GetPrintArgs } from '../../queries/getPrint'
import { ErrorBanner } from '../../components/error-banner/ErrorBanner'
import styles from './PrintPage.module.css'
import { PrintDetails } from '../../components/print-details/PrintDetails'

export const PrintPage = () => {
  const { id } = useParams()
  const idNr = parseInt(id || '', 10)

  if (!idNr) return <Navigate replace to='/not_found' />

  const { loading, error, data } = useQuery<GetPrintData, GetPrintArgs>(GET_PRINT_QUERY, { variables: { id: idNr } })
  const print = data?.getPrint

  // if (prints && prints.length === 0) return <Navigate replace to='/not_found' />

  return (
    <BasePage> {
    error
      ? <ErrorBanner message='Something went wrong. Please refresh.' />
      : loading
        ? <h2>Loading...</h2>
        : print && (
          <div className={styles.container}>
            <PrintDetails print={print} />
          </div>
        )
    }
    </BasePage>
  )
}
