            #language: pt

            Funcionalidade: Gerenciamento de conta do usuário

            Contexto: Acesso ao site
            Dado que acessei o site

            Cenário: Deve permitir que um usuário autenticado acesse a área de edição de informações
            Quando logo no site
            Então acesso meu perfil
            E acesso a área de edição de informações

            Cenário: Deve permitir que o usuário visualize suas informações relevantes
            Quando logo no site
            E acesso meu perfil
            E acesso a área de edição de informações
            Então as informações relevantes devem estar visíveis

            Esquema do Cenário: O usuário deve inserir uma senha válida e a confirmação da senha para alterar seu nome
            Quando logo no site
            E acesso meu perfil
            E acesso a área de edição de informações
            E altero meu nome para "<nome>"
            E seleciono a opção de alterar senha
            E informo uma senha válida "<senha>"
            E confirmo a senha "<senha>"
            E confirmo a operação
            Então o usuário é atualizado
            Exemplos:
            | nome                                                                                                 |  | senha  |
            | a                                                                                                    |  | 123456 |
            | aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa |  | 123456 |
            | 😂🤣😃                                                                                               |  | 123456 |
            | 123                                                                                                  |  | 123456 |
            | @#$%                                                                                                 |  | 123456 |

Cenário: Deve permitir que o usuário comum altere sua própria senha para uma senha válida
Quando logo no site
E acesso meu perfil
E acesso a área de edição de informações
E seleciono a opção de alterar senha
E informo uma senha válida "123456789123"
E confirmo a senha "123456789123"
E confirmo a operação
Então o usuário é atualizado

Cenário: Não deve permitir que um usuário não autenticado acesse a edição de informações
E não estou autenticado
Então a área de gerenciamento de perfil não deve estar visível

Cenário: Não deve permitir que o usuário atualize seu nome caso não preencha o campo senha
Quando logo no site
E acesso meu perfil
E acesso a área de edição de informações
E altero meu nome para "João Pedro"
E seleciono a opção de alterar senha
E não informo uma senha
E confirmo a senha "123456"
E confirmo a operação
Então a mensagem "Campo obrigatório" é exibida
E o usuário não é atualizado

Cenário: Não deve permitir que o usuário atualize seu nome caso não preencha o campo de confirmação de senha
Quando logo no site
E acesso meu perfil
E acesso a área de edição de informações
E altero meu nome para "João Pedro"
E seleciono a opção de alterar senha
E informo uma senha válida "123456"
E não confirmo a senha
E confirmo a operação
Então a mensagem "As senhas devem ser iguais." é exibida
E o usuário não é atualizado

Cenário: Não deve permitir atualizar a senha caso o campo nome não esteja preenchido
Quando logo no site
E acesso meu perfil
E acesso a área de edição de informações
E esvazio o campo nome
E seleciono a opção de alterar senha
E informo uma senha válida "123456"
E confirmo a senha "123456"
E confirmo a operação
Então a mensagem "Informe o nome" é exibida
E o usuário não é atualizado

Cenário: Não deve permitir atualizar o nome do usuário para mais de 100 caracteres
Quando logo no site
E acesso meu perfil
E acesso a área de edição de informações
E altero meu nome para "João PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão Pedroa"
E seleciono a opção de alterar senha
E informo uma senha válida "123456"
E confirmo a senha "123456"
E confirmo a operação
Então é exibida uma mensagem de erro
E o usuário não é atualizado