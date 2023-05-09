describe('The-Internet login form', () => {

    beforeEach(() => {
        cy.visit('/login');
        cy.get('h2').should('have.text', 'Login Page');
    });

    it('should accept user with valid credentials [T_10]', () => {
        cy.get('label').contains('Username').siblings('input').type('tomsmith');
        cy.get('label').contains('Password').siblings('input').type('SuperSecretPassword!');
        cy.get('button').contains('Login').click();
        cy.contains('You logged into a secure area!').should('be.visible');
    });

    it('should display error message for incorrect username [T_11]', () => {
        cy.get('label').contains('Username').siblings('input').type('john');
        cy.get('label').contains('Password').siblings('input').type('pa55w0rd');
        cy.get('button').contains('Login').click();
        cy.contains('Your username is invalid!').should('be.visible');
    });
    
    it('should display error message for incorrect password [T_12]', () => {
        cy.get('label').contains('Username').siblings('input').type('tomsmith');
        cy.get('label').contains('Password').siblings('input').type('incorrect_password');
        cy.get('button').contains('Login').click();
        cy.contains('Your password is invalid!').should('be.visible');
    });
    
});