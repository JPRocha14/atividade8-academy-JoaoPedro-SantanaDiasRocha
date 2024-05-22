export default class CadastroPage {
    linkRegistrar = '[href="/register"]';

    inputNome = ':nth-child(1) > .profile-input';
    inputEmail = ':nth-child(2) > .profile-input';
    inputSenha = ':nth-child(3) > .profile-input';
    inputConfirmarSenha = ':nth-child(4) > .profile-input';

    buttonConfirmar = '.account-save-button';
    buttonCadastroOk = '.modal-actions > button';

    modalMessege = '.modal-body';
    messegeName = '.input-error';


    clickLinkRegistrar() {
        cy.get(this.linkRegistrar).should('be.visible').click();
    }

    typeNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    typeConfirmarSenha(confirmaSenha) {
        cy.get(this.inputConfirmarSenha).type(confirmaSenha);
    }

    clickButtonConfirmar() {
        cy.get(this.buttonConfirmar).should('be.visible').click();
    }

    clickButtonOk() {
        cy.get(this.buttonCadastroOk).should('be.visible').click();
    }
}