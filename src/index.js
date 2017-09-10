import Vue from 'vue';

import Bootstrap from './components/bootstrap/Bootstrap';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: { Bootstrap },
  render: createElement => createElement(Bootstrap)
});
