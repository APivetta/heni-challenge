import getPrints from '../fixtures/getPrints.json'

describe('Prints page', () => {
  const cardData = getPrints.data.getPrints.records[0]

  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:4000/graphql', getPrints)
    cy.visit('/prints/1')
  })

  it('should show error banner', () => {
    cy.intercept('POST', 'http://localhost:4000/graphql', { statusCode: 400 })

    cy.contains('Something went wrong. Please refresh.')
  })

  it('should show pagination', () => {
    cy.contains('Page 1 of 64')
  })

  it('should navigate to next page', () => {
    cy.findAllByRole('button', { name: 'next >' }).eq(0).click()
    cy.location('pathname').should('eq', '/prints/2')
  })

  it('should navigate to previous page', () => {
    cy.visit('/prints/2')
    cy.findAllByRole('button', { name: '< previous' }).eq(0).click()
    cy.location('pathname').should('eq', '/prints/1')
  })

  it('should show ten prints', () => {
    cy.findAllByTestId('print-card').should('have.length', 10)
  })

  it('should navigate to card details', () => {
    cy.findAllByRole('button', { name: 'More Details' }).eq(0).click()
    cy.location('pathname').should('eq', `/print/${cardData.id}`)
  })

  it('should show card information', () => {
    const card = () => cy.findAllByTestId('print-card').eq(0)

    card().contains(cardData.title)
    card().contains(cardData.technique)
    card().contains(cardData.century)
    card().contains(cardData.culture)
    card().contains(cardData.rank)
  })
})
