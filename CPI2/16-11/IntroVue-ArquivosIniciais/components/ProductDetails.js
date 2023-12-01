// ProductDetails.js
export default {
    props: ['detalhes'],
    template: `
      <ul>
        <li v-for="(detalhe, index) in detalhes" :key="index">{{detalhe}}</li>
      </ul>
    `
  }