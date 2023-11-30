const app = Vue.createApp({
    data() {
        return {
            produto: 'Camiseta Próton',
            image : './assets/images/proton_branca.jpg',
            estoque: 10,
            descricao: 'Uma camiseta de algodão com o logo da Próton',
            link: 'https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal',
            promocao: true,
            detalhes: ['100% algodão', 'Cor: Branca', 'Unissex'],
            cores: [
                {id: 1, cor: 'Branca'},
                {id: 2, cor: 'Preta'},
                // adicione mais cores aqui
            ]
        }
    }
});

const montApp = app.mount('#app');