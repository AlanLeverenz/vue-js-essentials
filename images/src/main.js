import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
// webpack assume there is an index.js file inside store
import store from './store';
import AuthHandler from './components/AuthHandler';

// tell Vue library that the Vue Router exists
Vue.use(VueRouter);

// Vue Router instance
// set path and component to apply
// history directs to Browser Router (ignores hash)
// export router from file
export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/oauth2/callback', component: AuthHandler }

    ]
})

// store is included in Vue instance to provide data
// add router to the Vue instance
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

