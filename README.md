README
Clima API
Esta é uma API simples que permite aos desenvolvedores obter informações meteorológicas de uma cidade específica. A API utiliza o Express.js, o Axios e a API do OpenWeatherMap para obter as informações meteorológicas e as envia de volta para o cliente no formato JSON.

Como usar
Faça uma requisição GET para a API, passando o nome da cidade como parâmetro.
A API retornará as informações meteorológicas relevantes, como a temperatura, a descrição do clima, a umidade e a velocidade do vento.
Tecnologias utilizadas
Express.js
Axios
API do OpenWeatherMap
API flagsAPI
Rotas
GET /climatempo/:cidade: Obtém as informações meteorológicas da cidade especificada.
Como rodar a API
Clone o repositório em sua máquina local.
Instale as dependências usando npm install.
Crie um arquivo config.json com sua chave de API do OpenWeatherMap.
Inicie a API usando node app.js.
Faça uma requisição GET para http://localhost:3000/climatempo/:cidade.
Considerações finais
Esta é uma API simples e não deve ser usada em produção. Ela foi criada apenas para fins educacionais e de demonstração. Além disso, é necessário obter uma chave de API do OpenWeatherMap e da flagsAPI para usar a API.

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
