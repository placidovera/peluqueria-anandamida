document.addEventListener("DOMContentLoaded", function () {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const enviarBtn = document.getElementById("enviarBtn");

    enviarBtn.addEventListener("click", function () {
        const nombreValor = nombre.value.trim();
        const emailValor = email.value.trim();
        const mensajeValor = mensaje.value.trim();

        let errores = [];

        if (nombreValor === "") {
            errores.push("Nombre vacío");
        }

        if (emailValor === "") {
            errores.push("Email vacío");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValor)) {
            errores.push("Email inválido");
        }

        if (mensajeValor === "") {
            errores.push("Mensaje vacío");
        }

        if (errores.length > 0) {
            alert("Corregí los siguientes errores:\n" + errores.join("\n"));
            return;
        }

        // Crear mensaje para WhatsApp
        const texto = `Hola, soy ${nombreValor}. Mi correo es ${emailValor}. Quiero pedir un turno. Mi mensaje: ${mensajeValor}`;

        // Codificar texto para URL
        const textoCodificado = encodeURIComponent(texto);

        // Número de WhatsApp (agregá el tuyo real si querés)
        const numero = "54343577393"; // sin "+" ni espacios

        // Redireccionar a WhatsApp
        const url = `https://wa.me/${numero}?text=${textoCodificado}`;
        window.open(url, "_blank");
    });
});
