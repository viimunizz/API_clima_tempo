
README
Este projeto é uma aplicação web simples que busca dados meteorológicos de uma API local (http://localhost:3000/climatempo) com base na entrada do usuário (nome da cidade) e os exibe na página da web.

Uso
Clone o repositório:
bash
Copy code
git clone <URL_do_repositório>
Abra o diretório do projeto.

Abra o arquivo index.html em seu navegador da web preferido.

Insira o nome da cidade para a qual você deseja verificar o clima no campo de entrada.

Envie o formulário.

As informações meteorológicas para a cidade inserida serão exibidas na página.

Detalhes da Implementação
A funcionalidade principal em JavaScript está contida no arquivo index.js.

A função addEventListener é usada para ouvir o evento de submissão do formulário.

Ao enviar o formulário, o evento é impedido de sua ação padrão (que é enviar o formulário para o servidor).

O valor da entrada da cidade é recuperado e formatado para garantir consistência.

Uma solicitação fetch é feita para o ponto de extremidade da API local (http://localhost:3000/climatempo) com o nome da cidade inserido.

Ao receber uma resposta da API, os dados são processados e exibidos dinamicamente na página da web.

Se a chamada à API for bem-sucedida e os dados meteorológicos forem recuperados, eles são exibidos nas áreas designadas na página da web.

Se houver um erro ao recuperar os dados meteorológicos, uma mensagem de erro é exibida.

Dependências
Este projeto não tem dependências externas. No entanto, requer uma conexão de internet ativa para buscar dados meteorológicos da API local.

Licença
Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para modificá-lo e distribuí-lo de acordo com os termos da licença.

Autor
Este projeto foi criado por [Seu Nome]. Para quaisquer perguntas ou feedback, entre em contato com [Seu Endereço de E-mail].
