import { clickClient, clientSelect } from "../support/page_objects/clientSelect"
import { onNavigationPage } from "../support/page_objects/navigationPage"

describe('Test with Page Objects', ()=>
{
    beforeEach('open application', () =>
        {
            cy.visit('https://ni-dev.cotiviti.com/cas/login?next=%2F') //navigate to NI-dev
        }
    )
    it('verify navigation', ()=> {
        onNavigationPage.navigateToNi() //navigates to NI
        const clickClient1 = new clickClient()
        clickClient1.selectClient('PROVIDENCEWA',133) //selects client and logs in with master mode
    })
}
)