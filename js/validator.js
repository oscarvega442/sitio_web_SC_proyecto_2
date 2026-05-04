function validar() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const resultado = validarPassword(password, confirmPassword);
    mostrarResultado(resultado);
}


function validarPassword(password, confirmPassword) {
    let score = 0;

    const reglas = {
        longitud: password.length >= 8,
        mayuscula: /[A-Z]/.test(password),
        numero: /\d/.test(password),
        especial: /[!@#$%^&*]/.test(password),
        espacios: !/\s/.test(password),
        coincide: password === confirmPassword
    };

    // sumar puntos
    for (let key in reglas) {
        if (reglas[key]) score += 100 / 6;
    }

    return { reglas, score };
}


function mostrarResultado(data) {
    const { reglas, score } = data;

    // actualizar reglas visuales
    actualizar("r1", reglas.longitud);
    actualizar("r2", reglas.mayuscula);
    actualizar("r3", reglas.numero);
    actualizar("r4", reglas.especial);
    actualizar("r5", reglas.espacios);
    actualizar("r6", reglas.coincide);

    // barra
    const progreso = document.getElementById("progreso");
    progreso.style.width = score + "%";

    // color barra
    if (score < 40) progreso.style.background = "red";
    else if (score < 70) progreso.style.background = "orange";
    else progreso.style.background = "green";

    // nivel
    const nivel = document.getElementById("nivel");

    if (score < 40) nivel.innerText = "Débil";
    else if (score < 70) nivel.innerText = "Media";
    else nivel.innerText = "Fuerte";
}


function actualizar(id, cumple) {
    const el = document.getElementById(id);
    el.innerText = (cumple ? "✅ " : "❌ ") + el.innerText.substring(2);
}
