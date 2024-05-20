import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login.page";
import { faker } from "@faker-js/faker";

var paginaLogin = new LoginPage();

var nome = "João Pedro";
var email = faker.internet.email().toLowerCase();
var senha = "123456"

before(function () {
    cy.cadastroUser(nome, email, senha);
});

Given('que acessei o site', function () {
    cy.visit('');
});

When('acesso a área de login', function () {
    paginaLogin.clickLinkLogin();
});

When('informo um email existente', function () {
    paginaLogin.typeEmail(email);
});

When('informo uma senha existente', function () {
    paginaLogin.typeSenha(senha);
});

When('informo um email inexistente', function () {
    paginaLogin.typeEmail('peggie.deckow70@yahoo.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
});

When('informo uma senha inexistente', function () {
    paginaLogin.typeSenha('1234567891234')
});

When('não informo o email', function () { });

When('não informo a senha', function () { });

When('confirmo a operação', function () {
    cy.intercept('POST', '/api/auth/login').as('loginUser');
    paginaLogin.clickButtonLogin();
});

Then('posso logar no site', function () {
    cy.wait('@loginUser');
});

Then('não posso logar no site', function () {
    cy.wait('@loginUser');
    cy.get(paginaLogin.modalMessege).invoke('text').should('contain', 'Falha ao autenticarUsuário ou senha inválidos.');
});

Then('a mensagem de erro {string} é exibida', function (mensagem) {
    cy.get(paginaLogin.messageError).invoke('text').should('eq', mensagem);
});