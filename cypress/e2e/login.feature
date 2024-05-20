#language: pt

Funcionalidade: Login de usuário

Contexto: Acesso à área de login
Dado que acessei o site
Quando acesso a área de login

Cenário: Deve ser possível logar com as credenciais de um usuário cadastrado
E informo um email existente
E informo uma senha existente
E confirmo a operação
Então posso logar no site

Cenário: Não deve ser possível logar com email inválido
E informo um email inexistente
E informo uma senha existente
E confirmo a operação
Então não posso logar no site

Cenário: Não deve ser possível logar com senha inválida
E informo um email existente
E informo uma senha inexistente
E confirmo a operação
Então não posso logar no site

Cenário: Não deve ser possível logar sem informar o email do usuário
E não informo o email
E informo uma senha existente
E confirmo a operação
Então a mensagem de erro "Informe o e-mail" é exibida

Cenário: Não deve ser possível logar sem informar a senha do usuário
E informo um email existente
E não informo a senha
E confirmo a operação
Então a mensagem de erro "Informe a senha" é exibida
