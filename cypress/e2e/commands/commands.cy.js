// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

describe('Command Example', function (){

    beforeEach(function (){
         cy.visit('https://www.saucedemo.com/');
         
     })
 
     it('Success Login Test', function(){
        cy.typeLogin('standard_user','secret_sauce')
        cy.get('.title').should('contain.text', 'Products')
        cy.logout();
        cy.url().should('eq', 'https://www.saucedemo.com/')
     })

     //afterEach(function(){
       // cy.logout();
   //  })
 })