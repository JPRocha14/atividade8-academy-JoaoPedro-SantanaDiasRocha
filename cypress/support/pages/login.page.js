export default class LoginPage {

    linkLogin = '[href="/login"]';

    inputEmail = ':nth-child(1) > input';
    inputSenha = '.login-form > :nth-child(2) > input';
    messageError = '.input-error';

    buttonLogin = '.login-button';
    modalMessege = '.modal-body';

    clickLinkLogin() {
        cy.get(this.linkLogin).should('be.visible').click();
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).should('be.visible').click();
    }
}