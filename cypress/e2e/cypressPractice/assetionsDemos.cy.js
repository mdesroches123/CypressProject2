
it('Assertions Demo', () => {  //name of the test, you can add function or use () =>

    cy.visit('https://example.cypress.io/')
    cy.contains('get').click();

    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .and('be.enabled')

        expect(true).to.be.true

        //assert.equal(4, 5, 'NOT EQUAL')
       // assert.equal(4, 4, 'NOT EQUAL')
        assert.equal(4, '4', 'NOT EQUAL')   // 4 equal String or character
        assert.strictEqual(4, '4', 'NOT EQUAL') //4 and '4' as a string or character don't = to 4

});