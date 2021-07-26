export class Login {
    login() {
        
        cy.fixture('linktreeLogin').then( data => {
            cy.log('go to the login page')
            cy.visit(data.login_url)
            
            cy.log('type login')
            cy.get('input[name="username"]').type(data.username)

            cy.log('type password')
            cy.get('input[name="password"]').type(data.password)

            cy.log('check that login button acceptable to click and click')
            cy.get('button[data-test="Button"]').should('not.be.disabled').click()
        })
        return this;
    }
  
    ensureLogin(id: string) {

      cy
        .get('button[data-testid='+id+']')
              .click()
              .should('exist');
  
        return this;
  
    }

    logout() {
      cy.visit('https://linktr.ee/logout')
      cy.get('span[data-test="SignInCta"]').should('exist')
    }
  
  }