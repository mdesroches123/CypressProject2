describe('My First Test', () => {
    it('Google Search', () => {
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').type('iphone 13');
        cy.contains('Google Search').click();

        cy.wait(2000);
        cy.contains('News').click();
       

    });


});