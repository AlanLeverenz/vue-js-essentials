<template>
    <div>
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList :videos="videos"></VideoList>
    </div>
</template>

<script>
import { YouTubeAPI } from './../api.js';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = YouTubeAPI;

// insert component tag inside template for html viewing
// components object has key and value
// can shorten to single word if key and value are the same
// @ is in place of v-on: directive syntax
// :videos is same as v-bind:videos

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList
    },
    data() {
        return { videos: [] }
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
            }).then(response => {
                // storing response in this.videos
                this.videos = response.data.items
            });
        }
    }
};
</script>