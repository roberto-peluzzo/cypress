const user = require('../fixtures/user.json')


describe('Acessa site', () => {

  beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('release.eurodolar.xyz');
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    })
    //teste com dados fixos
  it('login home', () => {
    cy.get('.User_desktopActions__9yGQ6 > .Link_container__QxAjC').click();
    cy.get('.styles__Form-sc-1bn79sb-0 > :nth-child(1)').type('34771682836');
    cy.get('#password').type('123456');
    cy.get('.style__Button-sc-bh5qtk-0').click();
    cy.get('#profile-username-menu').should('be.visible');
  })

    //teste com dados fixos
  it('Cadastro novo cliente fixo', () =>{
    cy.get('.User_desktopActions__9yGQ6 > .Link_container__QxAjC').click();
    cy.get('.styles__ButtonLink-sc-1ol6mlh-1').click();
    cy.get('#name').type('Giovanna Karoline Pereira De Araujo');
    cy.get('#cpf_cnpj').type('54489072880');
    cy.get('#email').type('meuteste@gmaill.com');
    cy.get('#password').type('123456');
    cy.get('.styles__Text-sc-1ui4kyc-1').click();
    cy.get('[data-testid="cta-signup"]').click();
    cy.get('#nature-type-1').should('be.visible');
  })

    //teste com dados dinamicos
  user.forEach(user =>{
    it(`Cadastro novo cliente ${user.name}`, () =>{
      cy.get('.User_desktopActions__9yGQ6 > .Link_container__QxAjC').click();
      cy.get('.styles__ButtonLink-sc-1ol6mlh-1').click();
      cy.get('#name').type(user.name);
      cy.get('#cpf_cnpj').type(user.cpf_cnpj);
      cy.get('#email').type(`${user.cpf_cnpj}@gmail.com`);
      cy.get('#password').type('123456');
      cy.get('.styles__Text-sc-1ui4kyc-1').click();
      cy.get('[data-testid="cta-signup"]').click();
      cy.get('#nature-type-1').should('be.visible');
    })
  })

  user.forEach(user =>{
    it.only(`Cadastro via modulo ${user.name}`, () =>{
      cy.cadastro(user.name, user.cpf_cnpj)
    }) 
  })
})