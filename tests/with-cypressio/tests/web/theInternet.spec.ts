describe('The-Internet', () => {
    it('has a correct title [T_10]', () => {
        cy.visit('/');
        cy.get('h1').should('have.text', 'Welcome to the-internet');
    });
});