<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
const API_KEY = 'AIzaSyAgLTkgOGxPKhcAl4mzcppU1RuQHye57Hw';

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
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => console.log(response));
        }
    }
};
</script>