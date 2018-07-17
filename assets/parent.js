import './scss/style.scss';
import Vue from 'vue/dist/vue.esm.js';
import child from './components/child.vue';

document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#parent',
    data: function() {
      return {
        showChild: false,
      }
    },
    methods: {
      toggleChild() {
        this.showChild = !this.showChild
      },
    },
    components: {
      child
    }
  })
});
