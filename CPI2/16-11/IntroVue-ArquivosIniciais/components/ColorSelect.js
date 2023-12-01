// ColorSelector.js
export default {
    props: ['cores'],
    methods: {
      selecionaCor(indice) {
        this.$emit('seleciona-cor', indice);
      }
    },
    template: `
      <div class="color-circle" v-for="(item, indice) in cores" :key="item.id" :style="{backgroundColor: item.cor}" @mouseover="selecionaCor(indice)">
        {{item.cor}}
      </div>
    `
  }