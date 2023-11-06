describe('template spec', () => {




  //Teste 1
  it('Caso de teste 1: fazendo login com sucesso', () => {

    //Visitando o site a ser testado
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    //Fazendo o login
    fazerLogin('student', 'Password123') //usando credenciais validas

    //Assercao
    cy.get('.post-title').should('contain.text', 'Logged In Successfully')
  })




  //Teste 2
  it('Caso de teste 2: usando usuario não cadastrado e senha cadastrada', () => {

    //Visitando o site a ser testado
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    //Fazendo o login
    fazerLogin('incorrectUser', 'Password123') //usando usuario nao cadastrado e senha cadastrada

    //Assercao
    cy.get('#error').should('contain.text', 'Your username is invalid!') //verificando se o texto de erro eh mostrado
  })




  //Teste 3
  it('Caso de teste 3: usando usuario cadastrado e senha não correspondente/cadastrada', () => {

    //Visitando o site a ser testado
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    //Fazendo o login
    fazerLogin('student', 'incorrectPassword') //usando usuario cadastrado e senha nao correspondente/cadastrada

    //Assercao
    cy.get('#error').should('contain.text', 'Your password is invalid!') //verificando se o texto de erro eh mostrado
  })




  //Teste 4
  it('Caso de teste 4: testando o botão "home"', () => {

    //Visitando o site a ser testado
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    //Clicando no botao "home"
    cy.get('#menu-item-43 > a').click()

    //Assercao
    cy.get('.post-title').should('have.text', 'Hello') //verificando se estamos na pagina home pelo texto do topo
  })




  //Teste 5
  it('Caso de teste 5: acessando a página de login a partir da página home', () => {

    //Visitando a pagina home
    cy.visit('https://practicetestautomation.com/')

    //Acoes para acessar a pagina de login
    cy.get('#menu-item-20 > a').click()
    cy.get('.wp-container-3 > [style="flex-basis:33.33%"] > p > a').click()

    //Assercao
    cy.get('h2').should('have.text', 'Test login')
  })




  //Teste 6
  it('Caso de teste 6: adicionando um item na lista da página de teste de exceções', () => {

    //Visitando a pagina de teste de excecoes
    cy.visit('https://practicetestautomation.com/practice-test-exceptions/')

    //Adicionando um item na lista
    cy.get('#add_btn').click() //clicando no botao de adiconar
    cy.wait(4000) //esperando o tempo de loading
    cy.get('#row2 > .input-field').type('Xapa House') //digitando o item
    cy.get('#row2 > #save_btn').click() //clicando no botao de salvar

    //Assercao
    cy.get('#confirmation').should('have.text', 'Row 2 was saved')
  })
})

function fazerLogin(username, password){

  cy.get('#username').type(username) //digitando o usuario na caixa de texto de usuario
  cy.get('#password').type(password) //digitando a senha na caixa de texto de senha
  cy.get('#submit').click() //clicando no botao de submit (login)
}