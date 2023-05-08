describe('The-Internet', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('has a correct title [T_10]', () => {
        cy.get('h1').should('have.text', 'Welcome to the-internet');
    });

    it('an error message appears if login with invalid username [T_11]', () => {
        cy.contains('Form Authentication').click();
        cy.get('input[name="username"]').type('john');
        cy.get('input[name="password"]').type('password');
        cy.get('button[type="submit"]').click();
        cy.contains('Your username is invalid!').should('be.visible');
    });

});