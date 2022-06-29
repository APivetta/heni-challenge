/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { render, screen, act } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { printFixture } from '../../fixtures/print'
import { getPrintAuthors } from '../../utils/getPrintAuthor'
import { PrintCard } from './PrintCard'
import { createMemoryHistory, MemoryHistory } from 'history'

describe('PrintCard component test', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    render(
      <Router location='/' navigator={history}>
        <PrintCard print={printFixture} />
      </Router>)
  })

  test('Should show the print image', () => {
    const img = screen.getByAltText(printFixture.title!)
    expect(img.getAttribute('src')).toBe(printFixture.primaryimageurl)
  })

  test('Should show the print details', () => {
    expect(screen.getByText(printFixture.title!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(getPrintAuthors(printFixture), { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.technique!)).toBeInTheDocument()
    expect(screen.getByText(printFixture.century!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.culture!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.rank!, { exact: false })).toBeInTheDocument()
  })

  test('Should navigate to the print details page if click on more details button', () => {
    act(() => {
      screen.getByRole('button', {
        name: /more details/i
      }).click()
    })

    expect(history.location.pathname).toBe(`/print/${printFixture.id}`)
  })
})
