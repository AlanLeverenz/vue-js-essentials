<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
        Image Storage
        </a>

    <div class="right menu">
        <div v-if="isLoggedIn">
            Galleries
            upload
            logout
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
    methods: mapActions(['login']),

}
</script>