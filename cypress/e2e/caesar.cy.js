/// <reference types="cypress" />

context('Test Caesar Cypher', () => {

    beforeEach(() => {
        cy.visit('../../app/caesar/index.html');
    });
    it('h1 should have text Caesar Cypher', () => {
        cy.get('h1')
        .should('have.text', 'Caesar Cypher');
    });

    it('type into key + message input & click on button', () => {
        // https://on.cypress.io/type
        cy.dataCy('cypher-key').clear().type('7')
        cy.dataCy('cypher-key').should('have.value', '7')
        cy.dataCy('message-input').clear().type('HelloooOOOooo!')
        cy.dataCy('button-cypher').click()
        cy.dataCy('cypher-result').should('have.text', 'OlssvvvVVVvvv!' )

    })

})