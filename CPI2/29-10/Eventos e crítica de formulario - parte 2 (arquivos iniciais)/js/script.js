import idadeApropriada from "./validaIdade.js";
import validaSenha from "./validaSenha.js";
import validaEmail from "./validaEmail.js";

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort',
    'tooLong',
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido."
    },
    data_nasc: {
        valueMissing: "O campo de nascimento não pode estar vazio.",
        customError: "Você deve ter no mínimo 13 anos para se cadastrar.",
        tooLong: "Por favor, preencha uma data válida."
    },
    termo: {
        valueMissing: "Você deve aceitar nossos termos de compromisso."
    },
    senha: {
        valueMissing: "O campo de senha não pode estar vazio.",
        customError: "Sua senha precisa ter: caractere minúsculo, maiúsculo e número.",
        tooShort: "A senha deve ter no mínimo 8 caracteres.",
        tooLong: "A senha deve ter no máximo 15 caracteres."
    }
};

const camposObrigatorios = document.querySelectorAll("[required]");

camposObrigatorios.forEach((campo) => {
    campo.addEventListener("blur", () => validaCampo(campo));
});

function validaCampo(campo) {
    campo.setCustomValidity("");
    let mensagem = '';

    if (campo.name === "data_nasc" && campo.value !== "") {
        idadeApropriada(campo);
    }

    if (campo.name === "senha" && campo.value !== "") {
        validaSenha(campo);
    }

    if (campo.name === "email" && campo.value !== "") {
        validaEmail(campo);
    }

    tiposDeErro.forEach((erro) => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    });

    const spanErro = campo.parentNode.querySelector('.mensagem-erro');
    const campoValido = campo.checkValidity();

    if (!campoValido) {
        spanErro.innerHTML = mensagem;
    } else {
        spanErro.innerHTML = '';
    }
}

const formulario = document.querySelector("[name=cadastro]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    window.location.href = "../pages/sucesso.html";
});