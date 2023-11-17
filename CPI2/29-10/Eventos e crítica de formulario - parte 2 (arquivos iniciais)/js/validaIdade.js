
export default function idadeApropriada(campo){
    const dataNascimento = new Date(campo)
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('você não tem idade para se cadastrar na plataforma')
        console.log(campo)
    }
}
function validaIdade(data){
    const hoje = new Date();
    const dataNascValida = new Date(data.getUTCFullYear() +13, data.getUTCMonth(), data.getUTCDate());
    return hoje >= dataNascValida
}