import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import GerenciaPage from "../pages/gerencia.page";
import LoginPage from "../pages/login.page";
import { faker } from "@faker-js/faker";

var paginaLogin = new LoginPage();
var paginaEdicao = new GerenciaPage();

var nome = 'João';
var email;
var senha = '123456';
var id;

Before(function () {
    email = faker.internet.email().toLowerCase();
    cy.cadastroUser(nome, email, senha).then(function (usuario) {
        id = usuario;
    });
});

Given('que acessei o site', function () {
    cy.visit('');
});


When('logo no site', function () {
    cy.intercept('POST', '/api/auth/login').as('logarUsuario');
    paginaLogin.clickLinkLogin();
    paginaLogin.typeLogin(email, senha);
    cy.wait('@logarUsuario');
});

When('acesso a área de edição de informações', function () {
    paginaEdicao.clickLinkEdicao()
});

When('altero meu nome para {string}', function (nome) {
    paginaEdicao.typeNome(nome);
});

When('seleciono a opção de alterar senha', function () {
    paginaEdicao.clickButtonAlterarSenha();
});

When('informo uma senha válida {string}', function (senha) {
    paginaEdicao.typeSenha(senha);
});

When('confirmo a senha {string}', function (senha) {
    paginaEdicao.typeConfirmaSenha(senha);
});

When('confirmo a operação', function () {
    cy.intercept('PUT', '/api/users/' + id).as('attUser');
    paginaEdicao.clickButtonSalvar();
});

When('não estou autenticado', function () {
    paginaLogin.clickLinkLogin();
    paginaLogin.clickButtonLogin();
});

When('não informo uma senha', function () { });

When('não confirmo a senha', function () { });

When('esvazio o campo nome', function () {
    cy.get(paginaEdicao.inputNome).clear()
});


Then('o usuário é atualizado', function () {
    cy.wait('@attUser');
    cy.get(paginaEdicao.modalMessege).invoke('text').should('eq', 'SucessoInformações atualizadas!')
});

Then('a mensagem {string} é exibida', function (mensagem) {
    cy.get(paginaEdicao.messegeError).invoke('text').should('eq', mensagem);
});

Then('é exibida uma mensagem de erro', function () {
    cy.wait('@attUser');
    cy.get(paginaEdicao.modalMessege).invoke('text').should('eq', 'Ocorreu um erroNão foi possível atualizar os dados.');
});

Then('as informações relevantes devem estar visíveis', function () {
    cy.get(paginaEdicao.campoNome).should('be.visible');
    cy.get(paginaEdicao.campoEmail).should('be.visible');
    cy.get(paginaEdicao.labelTipoUsuario).should('be.visible');
});

Then('acesso meu perfil', function () {
    paginaEdicao.clickLinkPerfil();
});

Then('a área de gerenciamento de perfil não deve estar visível', function () {
    cy.get(paginaEdicao.linkPerfil).should('not.exist');
});

Then('o usuário não é atualizado', function () { });
