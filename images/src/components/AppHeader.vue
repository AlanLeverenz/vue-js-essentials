<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">
        Image Storage
        </router-link>

    <div class="right menu">
        <div v-if="isLoggedIn" class="horizontal">
            <router-link to="/" class="item">Galleries</router-link>
            <router-link to="/upload" class="item">Upload</router-link>
            <a class="item" @click="logout">Logout</a>
        </div>

        <a v-else href="#" class="ui item" @click="login">
            Login
        </a>
    </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// mapGetters gets data from auth module 
// methods map actions to the component
// use spread ...mapActions to add other actions
// computed reads data 
export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout']),

}
</script>

<style scoped>
/* put buttons side by side */
.horizontal {
    display: flex;
    flex-direction: row;
}
</style>