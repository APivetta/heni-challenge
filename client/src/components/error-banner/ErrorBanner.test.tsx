import { render, screen } from '@testing-library/react'
import { ErrorBanner } from './ErrorBanner'

describe('ErrorBanner component test', () => {
  test('Should render the currency code and name', () => {
    const message = 'Something went wrong'
    render(<ErrorBanner message={message} />)

    const banner = screen.getByText(message)
    expect(banner).toBeInTheDocument()
  })
})
