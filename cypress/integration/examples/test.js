it ("Testing Forms", function() {
    cy.visit('http://localhost:3001/');

    cy.contains('Pizza?').click();

    cy.get('.name').type('Alan Mir').should('have.value', 'Alan Mir');

    cy.get('.pepporoni').click();

    cy.get('.salami').click();

    cy.get("#instructions").type("Can you please make it Heart Shaped?").should("have.value", "Can you please make it Heart Shaped?")

    cy.contains('Submit Order').click();
})