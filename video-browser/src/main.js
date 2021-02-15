// *****************
/*
import Vue from 'vue';
import App from './App';
new Vue({
    render: h => h(App)
}).$mount('#app');
*/

/*
new Vue ({
    el: '#app',
    render: function(createElement) {
        return createElement(App);
    }
});
*/

// *******
/*
import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
});
*/

// ****************
/*
import Vue, { createApp } from 'vue';
import App from './App';

createApp(App).mount('#app')
*/

// ****************

import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

