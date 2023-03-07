const { it } = require('mocha');
const user = require('../fixtures/user.json')


describe('Acessa site', () => {

  beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('release.eurodolar.xyz');
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    })
    //check na api de login
    it.only('fazendo um post na api de login', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://release-api.libraiene.xyz/v1/remittance/login',
            body: {
                accepted_terms: "",
                c_type: "F",
                confirmPassword: "123456",
                cpf_cnpj: "347.716.828-36",
                email: "",
                name: "",
                password: "123456",
                terms: "",
              }
        }).then((res) => {
            expect(res.status).to.be.equal(422)
        })
    })


    //teste com dados fixos
  it('login home', () => {
    cy.get('.User_desktopActions__9yGQ6 > .Link_container__QxAjC').click();
    cy.get('.styles__Form-sc-1bn79sb-0 > :nth-child(1)').type('34771682836');
    cy.get('#password').type('123456');
    cy.get('.style__Button-sc-bh5qtk-0').click();
    cy.get('#profile-username-menu').should('be.visible');
    })
})