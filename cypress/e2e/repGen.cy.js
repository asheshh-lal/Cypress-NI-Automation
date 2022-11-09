//logs into NI-DEV and generates a CMS IPR
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
      cy.get('#reports > img',{timeout:8000}).should('be.visible').click()
      cy.get('.btn > :nth-child(2)').click()
      cy.get(':nth-child(4) > .reports__toc__reportType > .reports__toc__dropdown-icon').click()
      cy.get('#Provider-toc-list > :nth-child(1) > .reports__toc__anchor').click()
      cy.wait(7000)
      cy.get('[data-knob="client_provider"] > span').click()
      cy.get('.select2-selection__rendered').type("amanda")
      cy.get('.select2-results__option--highlighted > span').click()
      cy.get(':nth-child(2) > [data-preset=""] > .cform-radio > label').click()
      cy.get('[data-sections=""] > :nth-child(1) > label').click()
      cy.get('.cform__line > .cform-button--blue').click()
    })
    
  })