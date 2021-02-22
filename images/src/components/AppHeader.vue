<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
        Image Storage
        </a>

    <div class="right menu">
        <a href="#" class="ui item" @click="login">
            Login
        </a>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
// methods map actions to the component
// use spread ...mapActions to add other actions
export default {
    name: 'AppHeader',
    methods: mapActions(['login'])
}
</script>