// import Vue from 'vue';
// import App from './App';

/*
new Vue ({
    el: '#app',
    render: function(createElement) {
        return createElement(App);
    }
});
*/

/*
new Vue({
    render: h => h(App)
}).$mount('#app');
*/

/*
Vue.createApp(App).mount('#app')
*/

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
