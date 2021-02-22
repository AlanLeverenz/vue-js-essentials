<template>
    <div>
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex';

// added created() lifecycle to call an action
export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
        // call action we need
        // parse out the token after # (window.location.hash)
        this.finalizeLogin(window.location.hash)
    }
}
</script>