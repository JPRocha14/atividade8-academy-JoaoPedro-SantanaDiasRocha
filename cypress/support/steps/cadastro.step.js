import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CadastroPage from "../pages/cadastro.page";
import { faker } from "@faker-js/faker";

var paginaCadastro = new CadastroPage();
var novoEmail;

Given('que acessei o site', function () {
    cy.visit('');
});

When('acesso a área de cadastro de usuários', function () {
    paginaCadastro.clickLinkRegistrar();
});

When('informo o nome {string}', function (nome) {
    paginaCadastro.typeNome(nome);
});

When('informo um e-mail válido', function () {
    novoEmail = faker.internet.email().toLowerCase();
    paginaCadastro.typeEmail(novoEmail);
});

When('informo o email inválido {string}', function (email) {
    paginaCadastro.typeEmail(email);
});

When('informo um email já existente', function () {
    novoEmail = faker.internet.email().toLowerCase();
    cy.intercept('POST', '/api/users', {
        statusCode: 409,
        fixture: 'emailInUse.json',
    }).as('emailInUse');
    paginaCadastro.typeEmail(novoEmail);
});

When('informo a senha {string}', function (senha) {
    paginaCadastro.typeSenha(senha);
});

When('confirmo a senha {string}', function (senha) {
    paginaCadastro.typeConfirmarSenha(senha);
});

When('confirmo a operação', function () {
    cy.intercept('POST', '/api/users').as('postUsers');
    paginaCadastro.clickButtonConfirmar();
});

When('informo o email {string}', function (email) {
    paginaCadastro.typeEmail(email);
});

When('não preencho o nome', function () { });

When('não preencho o email', function () { });

When('não preencho a senha', function () { });

When('não confirmo a senha', function () { });

Then('a mensagem de sucesso será exibida', function () {
    cy.wait('@postUsers');
    cy.get(paginaCadastro.modalMessege).invoke('text').should('contain', 'SucessoCadastro realizado!');
});

Then('a mensagem de erro será exibida', function () {
    cy.get(paginaCadastro.modalMessege).invoke('text').should('contain', 'Falha no cadastro.Não foi possível cadastrar o usuário.');
});

Then('a mensagem de erro {string} será exibida', function (mensagem) {
    cy.get(paginaCadastro.messegeName).invoke('text').should('eq', mensagem);
});

Then('a mensagem de erro de email já existente será exibida', function () {
    cy.wait('@emailInUse');
    cy.get(paginaCadastro.modalMessege).invoke('text').should('eq', 'Falha no cadastro.E-mail já cadastrado. Utilize outro e-mail');
});

Then('o usuário será cadastrado', function () { });

Then('o usuário não será cadastrado', function () { });