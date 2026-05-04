// Función principal (interfaz pública)
function validar() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const resultado = document.getElementById("resultado");

    const errores = validarPassword(password, confirmPassword);

    if (errores.length === 0) {
        resultado.innerHTML = "✅ Contraseña válida";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = errores.map(e => "❌ " + e).join("<br>");
        resultado.style.color = "red";
    }
}


// Función lógica (clave para pruebas)
function validarPassword(password, confirmPassword) {
    let errores = [];

    // 1. Longitud mínima
    if (password.length < 8) {
        errores.push("Debe tener al menos 8 caracteres");
    }

    // 2. Mayúscula
    if (!/[A-Z]/.test(password)) {
        errores.push("Debe contener al menos una letra mayúscula");
    }

    // 3. Número
    if (!/\d/.test(password)) {
        errores.push("Debe contener al menos un número");
    }

    // 4. Carácter especial
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errores.push("Debe contener al menos un carácter especial");
    }

    // 5. Sin espacios
    if (/\s/.test(password)) {
        errores.push("No debe contener espacios en blanco");
    }

    // 6. Coincidencia
    if (password !== confirmPassword) {
        errores.push("Las contraseñas no coinciden");
    }

    return errores;
}
