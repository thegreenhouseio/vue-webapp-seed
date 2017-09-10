import Vue from 'vue';

import Bootstrap from './components/Bootstrap.vue';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: { Bootstrap },
  render: h => h(Bootstrap)
});
