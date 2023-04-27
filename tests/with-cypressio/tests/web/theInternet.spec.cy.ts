describe('The-Internet', () => {
    it('has a correct title', () => {
        cy.visit('/');
        cy.get('h1').should('have.text', 'Welcome to the-internet');
    });
});