// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from "./pages/login.page";
import CadastroPage from "./pages/cadastro.page";
var paginaCadastro = new CadastroPage();
var paginaLogin = new LoginPage();

Cypress.Commands.add('cadastroUser', function (nome, email, senha) {
    return cy.request({
        method: 'POST',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
        body: {
            name: nome,
            email: email,
            password: senha
        }
    }).then(function (response) {
        id = response.body.id;
        return id;
    });
});

Cypress.Commands.add('logarUser', function (email, senha) {
    return paginaLogin.typeLogin(email, senha);
});

Cypress.Commands.add('criarUsuario', function (nome, email, senha, confirmaSenha) {
    return paginaCadastro.typeCadastro(nome, email, senha, confirmaSenha);
});