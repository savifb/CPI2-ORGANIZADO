import reviewFormComponent from "./ReviewForm.js";
import reviewListComponent from "./ReviewList.js";
const productDisplayComponent = {
    props:{
        premium: {
            type: Boolean,
            required: true
        }
    },
    components: {
        'review-form': reviewFormComponent,
        'review-list': reviewListComponent
    },
    template:
    
    ` 
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="imagem">
            </div>
            <div class="product-info">
                <h1>{{titulo}}</h1>
                <p v-if="estoque > 10">Em estoque</p>
                <p v-else-if="estoque <= 10 && estoque > 0">Quase Esgotado!</p>
                <p v-else>Estoque Esgotado</p>
                <p v-if="promocao">Em Promoção!</p>
                <p v-else>Não Em promoção</p>
                <h3>Detalhes:</h3>
                <ul>
                    <li v-for="(detalhe, index) in detalhes" :key="index">{{detalhe}}</li>
                </ul>
                <h3>Cores disponíveis:</h3>
                <div class="color-circle" v-for="(item, indice) in cores" :key="item.id" :style="{backgroundColor: item.cor}" @mouseover="atualizaProdutoSelecionado(indice)">
                    {{item.cor}}
                </div>
                <p>FRETE: {{frete}}</p>
                <div>
                    <button class="button" @click="addCarrinho" :disabled="!estoque" :class="{disableButton:!estoque}">Comprar</button>
                    <button class="button" @click="removeCarrinho" :disabled="!estoque" :class="{disableButton:!estoque}">Remover</button> 
                </div>
            </div>
        </div>
        <review-list v-if="avaliacoes.length" :avaliacoes="avaliacoes"></review-list>
        <review-form @review-submitted="addAvaliacao"></review-form>
    </div>`
    ,
    
    data() {
        return {
            marca: 'GV VAREJO',
            produto: 'Camiseta Próton',
            produtoSelecionado: 0,
            descricao: 'Uma camiseta de algodão com o logo da Próton',
            link: 'https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal',
            promocao: true,
            detalhes: ['100% algodão', 'Cor: Branca', 'Unissex'],
            cores: [
                {id: 1, cor: '#ffffff', imagem : './assets/images/proton_branca.jpg', quantidade:50},
                {id: 2, cor: '#a4a4a6',imagem : './assets/images/proton_cinza.jpg', quantidade:0},
                // adicione mais cores aqui
            ],
            avaliacoes: []
        }
    },
        methods: {
            addCarrinho() {
                this.$emit('add-carrinho', this.cores[this.produtoSelecionado].id);
                this.cores[this.produtoSelecionado].quantidade--;
            },
            removeCarrinho() {
                this.$emit('remove-carrinho', this.cores[this.produtoSelecionado].id);
                this.cores[this.produtoSelecionado].quantidade++;
              },
            atualizaProdutoSelecionado(indice) {
                this.produtoSelecionado = indice;
            },
            addAvaliacao(avaliacao) {
                this.avaliacoes.push(avaliacao)
            }
            
        },
        computed: {
            titulo() {
                return this.produto + ' ' + this.marca;
            },
            imagem() {
                return this.cores[this.produtoSelecionado].imagem;
            },
            estoque() {
                return this.cores[this.produtoSelecionado].quantidade;
            },
            frete() {
                if (this.premium) {
                    return 'Grátis';
                }
                return "RS 50,00";
            }
        }

}
    export default productDisplayComponent;