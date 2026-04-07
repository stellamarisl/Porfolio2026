// Inicializar EmailJS
emailjs.init("nHmI5zAICrU44hXeo");

const contactForm = document.getElementById("contact-form");
const notificacion = document.getElementById("notificacion");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_tec08nd", 
        "template_ugjdwkc", 
        this
    )

    .then(function() {

        // Mostrar mensaje de éxito
        notificacion.textContent = "¡Mensaje enviado con éxito! 🚀";
        notificacion.classList.remove("notificacion-oculta");
        notificacion.classList.add("notificacion-visible");

        contactForm.reset();

        // Ocultar después de 4 segundos
        setTimeout(() => {
            notificacion.classList.remove("notificacion-visible");
            notificacion.classList.add("notificacion-oculta");
        }, 4000);
    })

    .catch(function(error) {
        notificacion.textContent = "Error al enviar el mensaje ❌";
        notificacion.classList.remove("notificacion-oculta");
        notificacion.classList.add("notificacion-visible");
        console.error("Error al enviar el mensaje:", error);
});
});
