# S206L

Este repositório contém os códigos produzidos por mim para a turma L1 do laboratório da disciplina de S206 do 2ª semestre de 2023.  
  
  
  
  
Orientações para executar o Projeto UI (também disponíveis no README.md):

1. Clone o repositório  
git clone https://github.com/lucasmteix/S206L.git  

2. Acesse a pasta do projeto  
(Dentro do repositório)  
cd Projetos/Projeto\ UI/  

3. Baixe as dependências do Cypress  
(Dentro da pasta do projeto (item 2))  
npm install  

4. Baixando as dependências para gerar o relatório  
(Dentro da pasta do projeto (item 2))  
npm i --save-dev cypress-mochawesome-reporter  

5. Execute o projeto  
(Dentro da pasta do projeto (item 2))  
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'  

6. Abra o report  
(Dentro da pasta do projeto)  
open cypress/reports/html/index.html  