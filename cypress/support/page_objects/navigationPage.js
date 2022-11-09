export class NavigationPage{

    navigateToNi(){
        cy.get('#username').type("ashesh.shrestha") 
        cy.get('#password').type("Rome234!")
        cy.get('.btn').click()
    }
    }
export const onNavigationPage= new NavigationPage()