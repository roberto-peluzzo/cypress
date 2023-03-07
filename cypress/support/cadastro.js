
Cypress.Commands.add('cadastro', (user_name, user_cpf_cnpj) => {
    cy.get('.User_desktopActions__9yGQ6 > .Link_container__QxAjC').click();
    cy.get('.styles__ButtonLink-sc-1ol6mlh-1').click();
    cy.get('#name').type(user_name);
    cy.get('#cpf_cnpj').type(user_cpf_cnpj);
    cy.get('#email').type(`${user_cpf_cnpj}@gmail.com`);
    cy.get('#password').type('123456');
    cy.get('.styles__Text-sc-1ui4kyc-1').click();
    cy.get('[data-testid="cta-signup"]').click();
    cy.get('#nature-type-1').should('be.visible');
})