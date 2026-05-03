function validar() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const resultado = document.getElementById("resultado");

    // Validaciones
    if (password.length < 6) {
        resultado.innerHTML = "❌ La contraseña debe tener al menos 6 caracteres";
        resultado.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        resultado.innerHTML = "❌ Las contraseñas no coinciden";
        resultado.style.color = "red";
        return;
    }

    // Validación extra opcional
    const tieneNumero = /\d/.test(password);

    if (!tieneNumero) {
        resultado.innerHTML = "❌ Debe incluir al menos un número";
        resultado.style.color = "red";
        return;
    }

    resultado.innerHTML = "✅ Contraseña válida";
    resultado.style.color = "green";
}
