const reviewListComponent = {
        props:{
                avaliacoes: {
                        type: Array,
                        required: true
                }
        },
        template:
        `
        <div class="review-container">
        <h3>Avaliações</h3>
            <ul>
                <li v-for="(avaliacao, indice) in avaliacoes" :key="indice">
                    {{avaliacao.nome}} deu nota {{avaliacao.nota}} estrelas 
                <br/>
                "{{avaliacao.avaliacao}}"
                <br/>
                </li>
            </ul>
        </div>
        `
}

export default reviewListComponent;