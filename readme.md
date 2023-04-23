# challenge-one-decodificador-br

Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

## As "chaves" de criptografia que utilizaremos são:
* A letra "e" é convertida para "enter"
* A letra "i" é convertida para "imes"
* A letra "a" é convertida para "ai"
* A letra "o" é convertida para "ober"
* A letra "u" é convertida para "ufat"

## Requisitos:

* Deve funcionar apenas com letras minúsculas

* Não devem ser utilizados letras com acentos nem caracteres especiais

* Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.  Por exemplo:
    * "gato" => "gaitober"
    * gaitober" => "gato"

* A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções

* O resultado deve ser exibido na tela.



## execução do projeto
### Foram usadas as seguintes tecnologias:
* HTML5
* CSS
* JavaSprint
![](about/1.png)
### Principais Pontos do Projeto
* Utilizada a função replace para substituição global das vocais;
* Utilizado o execCommand para a requisito de copiar área de transferência;
* Alterado as classes dos elementos através da classList, para permitir ocultar elementos dinamicamente. 

![](about/2.png)