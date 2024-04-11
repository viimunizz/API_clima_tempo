/*
  Este é um código Node.js que utiliza o framework Express para criar um servidor HTTP.
  Ele faz uma requisição à API OpenWeatherMap para obter informações meteorológicas de uma cidade específica.
*/

// Importando os módulos necessários
const express = require("express"); // Framework web para Node.js
const axios = require("axios"); // Cliente HTTP para fazer requisições
const path = require("path"); // Utilitário para lidar com caminhos de arquivos e diretórios
const cors = require("cors"); // Middleware para habilitar o CORS (Cross-Origin Resource Sharing)
const config = require("./config.json"); // Arquivo de configuração para armazenar a chave da API
const apikey = config.apikey; // Chave da API obtida do arquivo de configuração

// Inicializando o aplicativo Express
const app = express();
app.listen(3000); // Iniciando o servidor na porta 3000

// Utilizando middlewares
app.use(cors()); // Habilitando CORS
app.use(express.json()); // Middleware para fazer parsing de JSON no corpo da requisição
app.use(express.static(path.join(__dirname, "public"))); // Servindo arquivos estáticos a partir do diretório 'public'

// Definindo rota para obter informações meteorológicas de uma cidade
app.get("/climatempo/:cidade", async (req, res) => {
  // Obtendo o parâmetro 'cidade' da URL
  const city = req.params.cidade;

  try {
    // Fazendo uma requisição à API OpenWeatherMap para obter informações meteorológicas da cidade especificada
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}&units=metric`
    );

    // Verificando se a requisição foi bem-sucedida (código de status 200)
    if (response.status === 200) {
      // Extração e formatação dos dados relevantes recebidos da API
      const clima = response.data.weather[0].description;
      const climaFormatado = clima.charAt(0).toUpperCase() + clima.slice(1);
      const icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
      const flag = `https://flagsapi.com/${response.data.sys.country}/flat/64.png`;

      // Criando um objeto com os dados meteorológicos formatados
      const weatherData = {
        Temperatura: response.data.main.temp_min,
        Umidade: response.data.main.humidity,
        VelocidadeDoVento: response.data.wind.speed,
        Clima: climaFormatado,
        Icone: icon,
        Flag: flag,
      };

      // Enviando os dados formatados como resposta para o cliente
      res.send(weatherData);
    } else {
      // Se a requisição não foi bem-sucedida, enviar uma resposta de erro com o código de status recebido
      res
        .status(response.status)
        .send({ erro: "Erro ao obter dados meteorológicos" });
    }
  } catch (error) {
    // Se ocorrer um erro durante o processamento da requisição, enviar uma resposta de erro com o código de status 500
    res.status(500).send({ erro: "Erro ao obter dados meteorológicos", error });
  }
});
