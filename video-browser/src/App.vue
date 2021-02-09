<template>
    <div>
        <SearchBar >
        </SearchBar>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar';
// insert component tag inside template for html viewing
// components object has key and value
// can shorten to single word if key and value are the same
export default {
    name: 'App',
    components: {
        SearchBar
    }
};
</script>