
// Adiciona um ouvinte de evento para o formulário com o id "formClima" quando é submetido
document.getElementById("formClima").addEventListener("submit", function (event) {
  // Impede o comportamento padrão do formulário de recarregar a página
  event.preventDefault();

  // Obtém o valor inserido no campo de entrada com o id "cityInput"
  const city = document.getElementById("cityInput").value;
  // Formata o nome da cidade para ter a primeira letra maiúscula e o restante minúscula
  const cidadeFormatada = city.charAt(0).toUpperCase() + city.slice(1);

  // Envia uma requisição fetch para a API local hospedada em "http://localhost:3000/climatempo/{city}"
  fetch(`http://localhost:3000/climatempo/${city}`)
    // Processa a resposta da requisição como JSON
    .then((response) => response.json())
    // Manipula os dados recebidos
    .then((data) => {
      // Obtém a referência ao elemento onde os resultados do clima serão exibidos
      const tempoResult = document.getElementById("climaResult");

      // Define o estilo de exibição para o resultado do clima como "block" para torná-lo visível
      document.getElementById("climaResult").style.display = "block";

      // Verifica se há dados de temperatura na resposta
      if (data.Temperatura) {
        // Preenche o elemento "tempoResult" com HTML formatado com os dados meteorológicos
        tempoResult.innerHTML = `
          <div class="clima-city-name">
            <i class="ph-fill ph-map-pin" id="pin_map"></i>
            <p id="cityResult">${cidadeFormatada}</p>
            <img src="${data.Flag}" class="flag-city">
          </div>
          <div class="clima-city-temp">
            <i class="ph ph-thermometer-simple"></i>
            <p id="tempResult">${data.Temperatura}ºC</p>
          </div>
          <div class="clima-city-icon">
            <p id="climaDescriptionResult">${data.Clima}</p>
            <img src="${data.Icone}">
          </div>
          <div class="clima-city-bot">
            <div class="clima-city-umidade">
              <i class="ph ph-drop"></i>
              <p id="umidadeResult">${data.Umidade}%</p>
            </div>
            <p class="espacamento">|</p>
            <div class="clima-city-vento">
              <i class="ph ph-wind"></i>
              <p id="ventoResult">${data.VelocidadeDoVento} m/s</p>
            </div>
          </div>
        `;
      } else {
        // Se não houver dados de temperatura na resposta, exibe uma mensagem de erro
        tempoResult.innerHTML = "Erro ao obter dados meteorológicos!";
      }
    });
});
