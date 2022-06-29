import getPrint from '../fixtures/getPrint.json'

describe('Print page', () => {
  const cardData = getPrint.data.getPrint

  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:4000/graphql', getPrint)
    cy.visit('/print/248659')
  })

  it('should show error banner', () => {
    cy.intercept('POST', 'http://localhost:4000/graphql', { statusCode: 400 })

    cy.contains('Something went wrong. Please refresh.')
  })

  it('should show detail information', () => {
    const card = () => cy.findByTestId('print-details')
    card().contains(cardData.title)
    card().contains(cardData.technique)
    card().contains(cardData.dated)
    card().contains(cardData.century)
    card().contains(cardData.culture)
    card().contains(cardData.division)
    card().contains(cardData.contact)
    card().contains(cardData.creditline)
  })

  it('should show the print image', () => {
    const img = cy.findByAltText(cardData.title)

    img.should('exist')
  })
})
