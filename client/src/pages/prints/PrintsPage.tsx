import { useQuery } from '@apollo/client'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { BasePage } from '../base/BasePage'
import { GET_PRINTS_QUERY, GetPrintsData, GetPrintsArgs } from '../../queries/getPrints'
import { ErrorBanner } from '../../components/error-banner/ErrorBanner'
import { PrintList } from '../../components/print-list/PrintList'
import styles from './PrintsPage.module.css'
import { Paginator } from '../../components/paginator/Paginator'

export const PrintsPage = () => {
  const { page } = useParams()
  const navigate = useNavigate()
  const pageNr = parseInt(page || '', 10)
  const { loading, error, data } = useQuery<GetPrintsData, GetPrintsArgs>(GET_PRINTS_QUERY, { variables: { page: pageNr } })
  const prints = data?.getPrints.records

  if (!pageNr || pageNr < 1) return <Navigate to='/prints/1' />
  if (prints && prints.length === 0) return <Navigate to='/not_found' />

  const onNext = () => {
    navigate(`/prints/${pageNr + 1}`, { replace: false })
  }

  const onPrevious = () => {
    navigate(`/prints/${pageNr - 1}`, { replace: false })
  }

  return (
    <BasePage> {
    error
      ? <ErrorBanner message='Something went wrong. Please refresh.' />
      : loading
        ? <h2>Loading...</h2>
        : data && (
          <div className={styles.container}>
            <Paginator
              page={pageNr}
              totalPages={data.getPrints.info.pages}
              onNext={onNext}
              onPrevious={onPrevious}
            />
            <PrintList prints={data.getPrints.records} />
            <Paginator
              page={pageNr}
              totalPages={data.getPrints.info.pages}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          </div>
        )
    }
    </BasePage>
  )
}
