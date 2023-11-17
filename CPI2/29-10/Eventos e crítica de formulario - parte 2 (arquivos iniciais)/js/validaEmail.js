export default function validaEmail(campo) {
    const email = campo.value;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(email)) {
        campo.setCustomValidity("Informe um endereço de e-mail válido");
    } else {
        campo.setCustomValidity(""); // Redefine a validação customizada se o email for válido
    }
}