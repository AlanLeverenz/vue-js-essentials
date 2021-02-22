<template>
    <div>
        <AppHeader></AppHeader>

        <div class="ui container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// router-view seems to come from Vue Router
import AppHeader from './components/AppHeader';
export default {
    name: 'App',
    components: {
        AppHeader
    }
};
</script>