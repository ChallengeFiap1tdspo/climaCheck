document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const nameInput = document.getElementById("registerName");
  const emailInput = document.getElementById("registerEmail");
  const passwordInput = document.getElementById("registerPassword");
  const confirmPasswordInput = document.getElementById("registerConfirmPassword");

  const nameError = document.getElementById("registerNameError");
  const emailError = document.getElementById("registerEmailError");
  const passwordError = document.getElementById("registerPasswordError");
  const confirmPasswordError = document.getElementById("registerConfirmPasswordError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Resetando mensagens e escondendo erros
    nameError.textContent = "";
    nameError.style.display = "none";
    emailError.textContent = "";
    emailError.style.display = "none";
    passwordError.textContent = "";
    passwordError.style.display = "none";
    confirmPasswordError.textContent = "";
    confirmPasswordError.style.display = "none";

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    if (nameValue.length < 3) {
      nameError.textContent = "O nome deve ter pelo menos 3 caracteres.";
      nameError.style.display = "block";
      isValid = false;
    }

    if (!validateEmail(emailValue)) {
      emailError.textContent = "Digite um e-mail válido.";
      emailError.style.display = "block";
      isValid = false;
    }

    if (passwordValue.length < 6) {
      passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
      passwordError.style.display = "block";
      isValid = false;
    }

    if (passwordValue !== confirmPasswordValue) {
      confirmPasswordError.textContent = "As senhas não coincidem.";
      confirmPasswordError.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      alert("Cadastro realizado com sucesso!");
      form.submit();
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
