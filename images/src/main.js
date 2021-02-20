import Vue from 'vue';
import App from './App';
// webpack assume there is an index.js file inside store
import store from './store';

// store is included in Vue instance to provide data
new Vue({
    store,
    render: h => h(App)
}).$mount('#app');

