export default function validaSenha(campo) {
    const senha = campo.value;
    const letraMaiusculas = /[A-Z]/;
    const letraMinusculas = /[a-z]/;
    const numeros = /[0-9]/;
    const caractereEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    if (!letraMaiusculas.test(senha)) {
        campo.setCustomValidity("Você precisa informar ao menos uma letra maiúscula");
    } else if (!letraMinusculas.test(senha)) {
        campo.setCustomValidity("Você precisa informar ao menos uma letra minúscula");
    } else if (!numeros.test(senha)) {
        campo.setCustomValidity("Você precisa informar ao menos um número");
    } else if (!caractereEspecial.test(senha)) {
        campo.setCustomValidity("Você precisa incluir pelo menos um caractere especial");
    } else {
        campo.setCustomValidity(""); // Redefine a validação customizada se todos os critérios forem atendidos
    }
}