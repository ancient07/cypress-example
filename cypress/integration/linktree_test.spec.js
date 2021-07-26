describe('Cypress Tests', () => {
    beforeEach(() => {
      cy.fixture('linktreeLogin').then( data => {
          cy.log('go to the login page')
          cy.visit(data.login_url)
          
          cy.log('type login')
          cy.get('input[name="username"]').type(data.username)

          cy.log('type password')
          cy.get('input[name="password"]').type(data.password)

          cy.log('check that login button acceptable to click and click')
          cy.get('button[data-test="Button"]').should('not.be.disabled').click()

          cy.get('button[data-testid="LinkEditor_Link_Add_Button"]').should('exist')
      })
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
})