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
    };




















})