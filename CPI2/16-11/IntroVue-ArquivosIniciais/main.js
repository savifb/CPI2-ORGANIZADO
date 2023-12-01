import productDisplayComponent from "./components/ProductDisplay.js";

const app = Vue.createApp({
    data() {
        return {
            carrinho: [],
            premium: true
        }
    },
    components: {
        'product-display': productDisplayComponent
    },
    methods:{
        atualizaCarrinho(id){
            this.carrinho.push(id);
        },
        removeCarrinho(id) {
            const index = this.carrinho.indexOf(id);
            if (index > -1) {
                this.carrinho.splice(index, 1);
            }
        }
    }
});

const montApp = app.mount('#app');