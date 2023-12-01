const reviewFormComponent = {
    template:
    /*html*/

    `
    <form class="review-form" @submit.prevent='enviaDados'>
    <h3>Deixe uma avaliação</h3>
    <label for="nome">Nome: </label>
    <input id="nome" v-model='nome'>

    <label for="avaliacao">Avaliação:</label>
    <textarea id="avaliacao" v-model='avaliacao'></textarea>

    <label for="nota">Nota: </label>
    <select id="nota" v-model.number='nota'>
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    <input class="button" type="submit" value="Enviar">
  </form>
  
`,
    Data() {
        return {
        nome: '',
        avaliacao: '',
        nota: null
        }
    },
    methods:{
        enviaDados(){
            if(this.nome === '' || this.avaliacao === '' || this.nota === null){
                alert('Por favor, preencha todos os campos')
                return
            }
            let produtoReview = {
                nome: this.nome,
                avaliacao: this.avaliacao,
                nota: this.nota
            }
            this.$emit('review-submitted', produtoReview)
            this.nome = ''
            this.avaliacao = ''
            this.nota = null
        }
    }
}
export default reviewFormComponent