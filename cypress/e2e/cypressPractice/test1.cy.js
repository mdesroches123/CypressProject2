it('Amazon Practice', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('rings')
    cy.get('#nav-search-submit-button').click()
    
    cy.wait(2000);
    cy.get('[href="https://clinic.amazon.com/?ref_=nav_cs_clinic"]').click();
    
    
    });