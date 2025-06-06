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

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    if (nameValue.length < 3) {
      nameError.textContent = "O nome deve ter pelo menos 3 caracteres.";
      isValid = false;
    }

    if (!validateEmail(emailValue)) {
      emailError.textContent = "Digite um e-mail válido.";
      isValid = false;
    }

    if (passwordValue.length < 6) {
      passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
      isValid = false;
    }

    if (passwordValue !== confirmPasswordValue) {
      confirmPasswordError.textContent = "As senhas não coincidem.";
      isValid = false;
    }

    if (isValid) {
      alert("Cadastro realizado com sucesso!");
      form.submit();
    }
  });
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
