describe('template spec', () => {

  //Teste 1
  it('Caso de teste 1: fazendo login com sucesso', () => {

    //Visitando o site a ser testado
    cy.visit('https://computer-database.gatling.io/computers')

    //Acessando a página de adiconar computador
    cy.get('#add').click()

    //Criando um novo computador
    preencherDadosNovoComputador('Compiuter', '2023-12-01', '2023-12-04', 'Apple Inc.')

    //Asserção
    cy.get('.alert-message').should('have.text', 'Done !  Computer Compiuter has been created')
  })

  //Teste 2
  it('Caso de teste 2: procurando um computador existente', ()=> {

    //Visitando o site a ser testado
    cy.visit('https://computer-database.gatling.io/computers')

    //Pesquisando o computador
    cy.get('#searchbox').type('Macbook Air')
    cy.get('#searchsubmit').click()

    //Assercao
    cy.get('tbody > tr > :nth-child(1) > a').should('have.text', 'MacBook Air')
  })

  //Teste 3
  it('Caso de teste 3 (negativo): procurando um computador que não existe', ()=> {

    //Visitando o site a ser testado
    cy.visit('https://computer-database.gatling.io/computers')

    //Pesquisando o computador
    cy.get('#searchbox').type('Não existe')
    cy.get('#searchsubmit').click()

    //Assercao
    cy.get('em').should('have.text', 'Nothing to display')
  })
})

function preencherDadosNovoComputador(nome, dataIntroduced, dataDiscontinued, empresa){

  cy.get('#name').type(nome)
  cy.get('#introduced').type(dataIntroduced)
  cy.get('#discontinued').type(dataDiscontinued)
  cy.get('#company').select(empresa)
  cy.get('.primary').click()
}