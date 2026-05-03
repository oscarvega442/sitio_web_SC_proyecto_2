
function validar() {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const resultado = document.getElementById("resultado");

  const errores = validarPassword(password, confirm);

  if (errores.length === 0) {
    resultado.innerHTML = "✅ Contraseña válida";
    resultado.style.color = "green";
  } else {
    resultado.innerHTML = errores.join("<br>");
    resultado.style.color = "red";
  }
}

function validarPassword(password, confirm) {
  const errores = [];

  if (password.length < 8) errores.push("Debe tener al menos 8 caracteres");
  if (!/[A-Z]/.test(password)) errores.push("Debe tener una mayúscula");
  if (!/[0-9]/.test(password)) errores.push("Debe tener un número");
  if (!/[!@#$%^&*]/.test(password)) errores.push("Debe tener un carácter especial");
  if (password.includes(" ")) errores.push("No debe contener espacios");
  if (password !== confirm) errores.push("Las contraseñas no coinciden");

  return errores;
}
