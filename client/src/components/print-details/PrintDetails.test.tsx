/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { render, screen } from '@testing-library/react'
import { printFixture } from '../../fixtures/print'
import { getPrintAuthors } from '../../utils/getPrintAuthor'
import { PrintDetails } from './PrintDetails'

describe('PrintCard component test', () => {
  test('Should show the print image', () => {
    render(<PrintDetails print={printFixture} />)

    const img = screen.getByAltText(printFixture.title!)
    expect(img.getAttribute('src')).toBe(printFixture.primaryimageurl)
  })

  test('Should show the print details', () => {
    render(<PrintDetails print={printFixture} />)

    expect(screen.getByText(printFixture.title!, { exact: false })).toBeInTheDocument()

    expect(screen.getByText(printFixture.technique!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.dimensions!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.dated!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.century!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.culture!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.division!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.contact!, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(printFixture.creditline!, { exact: false })).toBeInTheDocument()
  })

  test('Should not show the people if data is null', () => {
    const noPeople = {
      ...printFixture,
      people: null
    }
    render(<PrintDetails print={noPeople} />)

    expect(screen.queryByText('People')).toBeNull()
  })

  test('Should show people', () => {
    render(<PrintDetails print={printFixture} />)

    printFixture.people!.forEach(person => {
      expect(screen.getByText(`${person.role}:`)).toBeInTheDocument()
    })
  })

  test('Should not show colors if data is null', () => {
    const noColors = {
      ...printFixture,
      colors: null
    }
    render(<PrintDetails print={noColors} />)

    expect(screen.queryByText('Colors')).toBeNull()
  })

  test('Should show colors', () => {
    render(<PrintDetails print={printFixture} />)

    printFixture.colors!.forEach(color => {
      expect(screen.getByTestId(`color-${color.color}`)).toBeInTheDocument()
    })
  })
})
