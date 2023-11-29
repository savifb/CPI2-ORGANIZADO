const app = Vue.createApp({
    data() {
        return {
            produto: 'Camiseta Próton',
            image : './assets/images/proton_branca.jpg',
            descricao: 'Uma camiseta de algodão com o logo da Próton',
            link: 'https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal'
            
        }
    }
});

const montApp = app.mount('#app');

