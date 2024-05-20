export default class GerenciaPage {
    linkPerfil = '[href="/profile"]';
    linkEdicao = '[href="/account"]';

    campoNome = '.account-form > :nth-child(1)';
    campoEmail = '.account-form > :nth-child(2)';
    labelTipoUsuario = '.account-form > :nth-child(3)';

    buttonAlterarSenha = '.account-password-button';
    buttonSalvar = '.account-save-button';

    inputNome = ':nth-child(1) > .profile-input';
    inputSenha = ':nth-child(5) > .profile-input';
    inputConfirmaSenha = ':nth-child(6) > .profile-input';

    modalMessege = '.modal-body';
    messegeError = '.input-error';


    clickLinkPerfil() {
        cy.get(this.linkPerfil).should('be.visible').click();
    }

    clickLinkEdicao() {
        cy.get(this.linkEdicao).should('be.visible').click();
    }

    typeNome(nome) {
        cy.get(this.inputNome).clear().type(nome);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    typeConfirmaSenha(senha) {
        cy.get(this.inputConfirmaSenha).type(senha);
    }

    clickButtonAlterarSenha() {
        cy.get(this.buttonAlterarSenha).should('be.visible').click();
    }

    clickButtonSalvar() {
        cy.get(this.buttonSalvar).should('be.visible').click();
    }
}