<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
// insert component tag inside template for html viewing
// components object has key and value
// can shorten to single word if key and value are the same
// @ is in place of v-on: directive syntax
export default {
    name: 'App',
    components: {
        SearchBar
    },
    methods: {
        onTermChange(searchTerm) {
            console.log(searchTerm);
        }
    }
};
</script>