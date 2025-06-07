document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const emailError = document.getElementById("loginEmailError");
  const passwordError = document.getElementById("loginPasswordError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;


    emailError.textContent = "";
    emailError.style.display = "none";
    passwordError.textContent = "";
    passwordError.style.display = "none";

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();


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

    if (isValid) {
      alert("Login realizado com sucesso!");
      form.submit();
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
