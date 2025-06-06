document.addEventListener("DOMContentLoaded", function () {
  const contatoForm = document.getElementById("contatoForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const cepInput = document.getElementById("cep");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  contatoForm.addEventListener("submit", function (e) {
    e.preventDefault();

        let isValid = true;
    let errorMessage = "";

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const cepValue = cepInput.value.replace(/\D/g, "");
    const subjectValue = subjectInput.value;
    const messageValue = messageInput.value.trim();

 
    if (nameValue.length < 3) {
      errorMessage += "- O nome deve ter pelo menos 3 caracteres.\n";
      isValid = false;
    }


    if (!validateEmail(emailValue)) {
      errorMessage += "- Digite um e-mail válido.\n";
      isValid = false;
    }


    if (cepValue && cepValue.length !== 8) {
      errorMessage += "- O CEP deve conter exatamente 8 números.\n";
      isValid = false;
    }


    if (!subjectValue) {
      errorMessage += "- Selecione um assunto.\n";
      isValid = false;
    }

   
    if (messageValue.length < 10) {
      errorMessage += "- A mensagem deve conter pelo menos 10 caracteres.\n";
      isValid = false;
    }

    if (!isValid) {
      alert("Corrija os seguintes erros antes de enviar:\n\n" + errorMessage);
    } else {
      alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
      contatoForm.reset();
    }

  });
});
