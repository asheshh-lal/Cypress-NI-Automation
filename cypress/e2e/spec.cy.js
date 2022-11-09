//logs into NI-DEV and embarks in provider profiles
describe('NI-DEV', () => {
  it('provider-profiles', () => {
    cy.visit('https://ni-dev.cotiviti.com/cas/login?next=%2F') //navigate to NI-dev
    //enters username and password
    cy.get('#username').type("ashesh.shrestha") 
    cy.get('#password').type("Rome890!")
    cy.get('.btn').click()
    //toggle master mode
    cy.get('#toggle-master-mode').click()
    //click on login button
    cy.get('.btn').click()
    cy.wait(8000)
    cy.get('.hidden-xs > :nth-child(1) > a > img').click()
    cy.get(':nth-child(2) > .navigation-list__link > .navigation-list__row > .col-md-4').click()
    cy.wait(10000)
    cy.get('[data-knob="state"] > span').click()
    cy.get('.select2-selection__rendered').type("Pennsylvania")
    cy.get('.select2-results__option').click()
    // cy.get('[data-nid="provider"] > .gear-shifter__node-inner-circle').click()
    cy.get('.text').click()
    cy.get('[data-id="0"] > [data-ind="0"]').scrollIntoView()
    cy.get('[data-id="0"] > [data-ind="0"]').should('have.text','POOR HEALTH HIGH SUPPLY')
    // cy.get('.hidden-xs > :nth-child(3) > a > img').click()
  })
  
})