/// <reference types="cypress"/>

describe('Criando cenário de testes para o site globalsqa', () => {

  it.skip('Caso de teste: registrando um usuário no site com sucesso', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Lionel')
    cy.get('#Text1').type('Messi')
    cy.get('#username').type('LM10')
    cy.get('#password').type('QueMiraBobo?')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it('Caso de teste: registrando um usuário no site com falha (faltando senha)', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Eerling')
    cy.get('#Text1').type('Haaland')
    cy.get('#username').type('EH9')
    cy.get('#password').type('WantGoal')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
  })

  it('Caso de teste: realizando login com sucesso', () => {

    let info = criarUsuario()
    cy.get('#username').type(info[2])
    cy.get('#password').type(info[3])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })
})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let primeiroNome = horas + minutos + segundos + 'PRIMEIRO_NOME'
  let ultimoNome = horas + minutos + segundos + 'ULTIMO_NOME'
  let usuario = horas + minutos + segundos + 'ID'
  let senha = horas + minutos + segundos + 'SENHA'
  let infoUsuario = [primeiroNome, ultimoNome, usuario, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(primeiroNome)
  cy.get('#Text1').type(ultimoNome)
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return infoUsuario
}