describe('Registrar usuário', () => {
  beforeEach(()=>{
    cy.visit('https://automationexercise.com/')
  })

  it('Verifica se a página está visível', ()=>{
    cy.title().should('be.equal', 'Automation Exercise')
  })

  it('Acessa a página de login', ()=>{
    cy.contains('a', 'Login').click()

  })


})