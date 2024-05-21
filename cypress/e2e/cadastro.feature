            # language: pt

            Funcionalidade: Cadastro de usuário

            Contexto: Acesso à área de cadastro de usuários
            Dado que acessei o site
            Quando acesso a área de cadastro de usuários

            Esquema do Cenário: Deve ser possível cadastrar um usuário com dados válidos
            E informo o nome "<nome>"
            E informo um e-mail válido
            E informo a senha "<senha>"
            E confirmo a senha "<senha>"
            E confirmo a operação
            Então a mensagem de sucesso será exibida
            E o usuário será cadastrado
            Exemplos:
            | nome                                                                                                 |  | senha        |
            | j                                                                                                    |  | 123456       |
            | aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa |  | 123456789123 |
            | 😂🤣😃                                                                                               |  | joaozinho    |
            | 123                                                                                                  |  | joaozinho    |
            | @#$%                                                                                                 |  | joaozinho    |

            Cenário: Deve ser possível cadastrar um usuário com o campo email de 60 caracteres
            E informo o nome "João Pedro"
            E informo o email com 60 caracteres
            E informo a senha "123456"
            E confirmo a senha "123456"
            E confirmo a operação
            Então a mensagem de sucesso será exibida
            E o usuário será cadastrado

            Cenário: Não deve ser possível cadastrar um usuário sem informar o campo nome
            E não preencho o nome
            E informo o email "joao@joao.com"
            E informo a senha "123456"
            E confirmo a senha "123456"
            E confirmo a operação
            Então a mensagem de erro "Informe o nome" será exibida
            E o usuário não será cadastrado

            Cenário: Não deve ser possível cadastrar um usuário sem informar o campo e-mail
            E informo o nome "João Pedro"
            E não preencho o email
            E informo a senha "123456"
            E confirmo a senha "123456"
            E confirmo a operação
            Então a mensagem de erro "Informe o e-mail" será exibida
            E o usuário não será cadastrado

            Cenário: Não deve ser possível cadastrar um usuário sem informar o campo senha
            E informo o nome "João Pedro"
            E informo o email "joao@joao.com"
            E não preencho a senha
            E confirmo a senha "123456"
            E confirmo a operação
            Então a mensagem de erro "Informe a senhaAs senhas devem ser iguais." será exibida
            E o usuário não será cadastrado

            Cenário: Não deve ser possível cadastrar um usuário sem informar o campo de confirmação de senha
            E informo o nome "João Pedro"
            E informo o email "joao@joao.com"
            E informo a senha "123456"
            E não confirmo a senha
            E confirmo a operação
            Então a mensagem de erro "Informe a senha" será exibida
            E o usuário não será cadastrado

            Esquema do Cenário: Não deve ser possível cadastrar um usuário com campo e-mail inválido
            E informo o nome "João Pedro"
            E informo o email inválido "<email>"
            E informo a senha "123456"
            E confirmo a senha "123456"
            E confirmo a operação
            Então a mensagem de erro será exibida
            E o usuário não será cadastrado
            Exemplos:
            | email                                                         |
            | a.com                                                         |
            | a@.com                                                        |
            | @.com                                                         |
            | .com                                                          |
            | 😂@gmail.com                                                  |
            | asdsddddddcccddadddddddaddaddddddddddddddddddddddda@gmail.com |

            Esquema do Cenário: Não deve ser possível cadastrar um usuário com a senha em formato inválido
            E informo o nome "João Pedro"
            E informo o email "joao@joao.com"
            E informo a senha "<senha>"
            E confirmo a senha "<senha>"
            E confirmo a operação
            Então a mensagem de erro "<mensagem>" será exibida
            E o usuário não será cadastrado
            Exemplos:
            | senha         |  | mensagem                                                                     |
            | 12345         |  | A senha deve ter pelo menos 6 dígitos.A senha deve ter pelo menos 6 dígitos. |
            | 1234567891234 |  | A senha deve ter no máximo 12 dígitos.A senha deve ter no máximo 12 dígitos. |


Cenário: Não deve ser possível cadastrar um usuário com campo nome acima de 100 caracteres
E informo o nome "João PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão PedroJoão Pedroa"
E informo o email "joao@joao.com"
E informo a senha "123456"
E confirmo a senha "123456"
E confirmo a operação
Então a mensagem de erro será exibida
E o usuário não será cadastrado

Cenário: Não deve ser possível cadastrar um usuário com um email já existente
E informo o nome "João Pedro"
E informo um email já existente
E informo a senha "123456"
E confirmo a senha "123456"
E confirmo a operação
Então a mensagem de erro de email já existente será exibida
E o usuário não será cadastrado