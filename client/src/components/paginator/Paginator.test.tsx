import { render, screen } from '@testing-library/react'
import { Paginator } from './Paginator'

test('Should show the current page number', () => {
  render(<Paginator page={5} totalPages={10} onNext={jest.fn()} onPrevious={jest.fn()} />)

  const pageNr = screen.getByText('Page 5 of 10')
  expect(pageNr).toBeInTheDocument()
})

test('Should call onNext if next button is clicked', () => {
  const nextMock = jest.fn()
  render(<Paginator page={5} totalPages={10} onNext={nextMock} onPrevious={jest.fn()} />)

  screen.getByRole('button', {
    name: /next/i
  }).click()

  expect(nextMock).toHaveBeenCalled()
})

test('Should call onPrvious if previous button is clicked', () => {
  const previousMock = jest.fn()
  render(<Paginator page={5} totalPages={10} onNext={jest.fn()} onPrevious={previousMock} />)

  screen.getByRole('button', {
    name: /previous/i
  }).click()

  expect(previousMock).toHaveBeenCalled()
})

test('Should call disable previous button if it\'s on the first page', () => {
  render(<Paginator page={1} totalPages={10} onNext={jest.fn()} onPrevious={jest.fn()} />)

  const previousButton = screen.getByRole('button', {
    name: /previous/i
  })

  expect(previousButton).toBeDisabled()
})

test('Should call disable next button if it\'s on the last page', () => {
  render(<Paginator page={10} totalPages={10} onNext={jest.fn()} onPrevious={jest.fn()} />)

  const nextButton = screen.getByRole('button', {
    name: /next/i
  })

  expect(nextButton).toBeDisabled()
})
