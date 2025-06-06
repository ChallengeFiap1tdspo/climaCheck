document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("consultaForm");
  const cepInput = document.getElementById("cep");
  const regiaoSelect = document.getElementById("regiao");
  const climaSelect = document.getElementById("clima");
  const weatherAlert = document.getElementById("weatherAlert");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cep = cepInput.value.replace(/\D/g, '');
    const regiao = regiaoSelect.value;
    const clima = climaSelect.value;

    if (cep.length !== 8) {
      exibirMensagem("Por favor, digite um CEP válido com 8 números.", "erro");
      return;
    }

    if (!regiao) {
      exibirMensagem("Selecione a sua região.", "aviso");
      return;
    }

    if (!clima) {
      exibirMensagem("Selecione a condição climática.", "aviso");
      return;
    }

    let mensagem = "";
    let tipo = "padrao";

    function dicasPorRisco(risco) {
      switch (risco) {
        case "alagamento":
          return " Dicas: Evite passar por áreas alagadas, não dirija em água profunda, desligue energia elétrica se possível e mantenha-se em locais altos.";
        case "deslizamento":
          return " Dicas: Fique atento a rachaduras nas paredes e solo, evite áreas de encostas e, se necessário, evacue para locais seguros indicados pela Defesa Civil.";
        case "tempestade":
          return " Dicas: Procure abrigo em local seguro, evite áreas abertas, mantenha distância de árvores, postes e estruturas metálicas.";
        default:
          return "";
      }
    }

    switch (clima) {
      case "ensolarado":
        mensagem = ` Região ${getNomeRegiao(regiao)}: Dia ensolarado. Proteja-se do sol forte entre 10h e 16h e hidrate-se bem.`;
        break;

      case "nublado":
        mensagem = ` Região ${getNomeRegiao(regiao)}: Clima nublado. Mesmo sem sol direto, proteja-se contra raios UV e mantenha a hidratação.`;
        break;

      case "chuvoso":
        tipo = "chuva";
        switch (regiao) {
          case "litoral":
          case "baixa":
            mensagem = ` Região ${getNomeRegiao(regiao)}: Chuvas fortes e risco de alagamentos e deslizamentos em áreas de encostas. ${dicasPorRisco("alagamento")} ${dicasPorRisco("deslizamento")}`;
            break;
          case "metropolitana":
          case "altotiete":
          case "norte-oeste":
            mensagem = ` Região ${getNomeRegiao(regiao)}: Chuva prevista com possibilidade de alagamentos localizados e deslizamentos em morros. ${dicasPorRisco("alagamento")} ${dicasPorRisco("deslizamento")}`;
            break;
          case "interior":
            mensagem = ` Região ${getNomeRegiao(regiao)}: Chuva moderada com possibilidade de alagamentos urbanos e tempestades isoladas. ${dicasPorRisco("alagamento")}`;
            break;
          default:
            mensagem = ` Região ${getNomeRegiao(regiao)}: Chuva prevista. Fique atento às condições locais.`;
        }
        break;

      case "tempestade":
        tipo = "tempestade";
        switch (regiao) {
          case "litoral":
          case "baixa":
            mensagem = ` Região ${getNomeRegiao(regiao)}: Alerta de tempestade! Risco alto de ventos fortes, alagamentos e deslizamentos. ${dicasPorRisco("tempestade")} ${dicasPorRisco("alagamento")} ${dicasPorRisco("deslizamento")}`;
            break;
          case "metropolitana":
          case "altotiete":
          case "norte-oeste":
            mensagem = ` Região ${getNomeRegiao(regiao)}: Tempestades fortes previstas com risco de ventos e alagamentos. ${dicasPorRisco("tempestade")} ${dicasPorRisco("alagamento")}`;
            break;
          case "interior":
            mensagem = ` Região ${getNomeRegiao(regiao)}: Tempestade isolada prevista. Evite exposição e fique em local seguro. ${dicasPorRisco("tempestade")}`;
            break;
          default:
            mensagem = ` Região ${getNomeRegiao(regiao)}: Alerta de tempestade. Fique atento e siga as orientações locais.`;
        }
        break;

      default:
        mensagem = "Selecione uma condição climática válida.";
    }

    exibirMensagem(mensagem, tipo);
  });

  function getNomeRegiao(value) {
    const nomes = {
      "litoral": "Litoral Norte",
      "baixa": "Baixada Santista",
      "metropolitana": "Região Metropolitana de SP",
      "altotiete": "Alto Tietê",
      "norte-oeste": "Norte/Oeste da Grande SP",
      "interior": "Interior do Estado"
    };
    return nomes[value] || "Região desconhecida";
  }

  function exibirMensagem(msg, tipo) {
    weatherAlert.innerHTML = msg.replace(/\n/g, "<br>");
    weatherAlert.className = `mensagem-alerta ${tipo}`;
  }
});
