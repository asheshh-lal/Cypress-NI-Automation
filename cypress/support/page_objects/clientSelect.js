export class clientSelect{


    selectClient(client, val)
    {
        cy.get('select').select(client).should('have.value',val)
        cy.get('#toggle-master-mode').click()
        cy.get('.btn').click()
    }
}

export const clickClient = clientSelect