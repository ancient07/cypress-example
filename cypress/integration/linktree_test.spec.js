import { Login } from '../support/pageObjects/login';
const login = new Login();

describe('Cypress Tests', () => {
    beforeEach(() => {
      cy.intercept('POST','**/open_session', { statusCode: 200, body:  { }, headers: { } })
      cy.intercept('POST', '**/api/pre_login', { fixture: 'pre_login.json'})  
      login
      .login()
      .ensureLogin("LinkEditor_Link_Add_Button")
    })
    it('should add test link box', () => {
        cy.log('press add link button')
        cy.get('button[data-testid="LinkEditor_Link_Add_Button"]').should('not.be.disabled').click()

        cy.log('check the link box appears')
        cy.get('div[data-testid="LinkEditor_Link_Display_Box"]').should('exist')

        cy.log('purge the test data')
        cy.get('button[data-testid="LinkEditor_DeletePanel_Toggle_Button"]').click()
        cy.get('button[data-testid="LinkEditor_DeletePanel_Delete_Button"]').click()
        cy.get('div[data-testid="LinkEditor_Link_Display_Box"]').should('not.exist')
    })
    afterEach(() => {
        login.logout()
      })
})
