import { BasePage } from '../base/BasePage'
import { useQuery } from '@apollo/client'
import { GET_PRINTS_QUERY, GetPrintsData, GetPrintsArgs } from '../../queries/getPrints'

import styles from './PrintsPage.module.css'

export const PrintsPage = () => {
  const { loading, error, data } = useQuery<GetPrintsData, GetPrintsArgs>(GET_PRINTS_QUERY)

  console.log(JSON.stringify(data))

  return (
    <BasePage>
      {data?.getPrints.records.map(print => <img key={print.id} src={print.primaryimageurl} />)}
    </BasePage>
  )
}
