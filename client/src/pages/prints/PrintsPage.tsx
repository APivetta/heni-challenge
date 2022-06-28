import { useQuery } from '@apollo/client'
import { Navigate, useParams } from 'react-router-dom'
import { BasePage } from '../base/BasePage'
import { GET_PRINTS_QUERY, GetPrintsData, GetPrintsArgs } from '../../queries/getPrints'
import { ErrorBanner } from '../../components/error-banner/ErrorBanner'
import { PrintList } from '../../components/print-list/PrintList'
import styles from './PrintsPage.module.css'

export const PrintsPage = () => {
  const { page } = useParams()
  const pageNr = parseInt(page || '', 10)

  if (!pageNr || pageNr < 1) return <Navigate replace to='/prints/1' />

  const { loading, error, data } = useQuery<GetPrintsData, GetPrintsArgs>(GET_PRINTS_QUERY, { variables: { page: pageNr } })

  return (
    <BasePage> {
    error
      ? <ErrorBanner message='Something went wrong. Please refresh.' />
      : loading
        ? <h2>Loading...</h2>
        : data && (
          <PrintList prints={data.getPrints.records} />
        )
    }
    </BasePage>
  )
}
