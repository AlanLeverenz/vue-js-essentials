<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoDetail :video="selectedVideo" />
        <div class="row">
            <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
        </div>
    </div>
</template>

<script>
import { YouTubeAPI } from './../api.js';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = YouTubeAPI;

// insert component tag inside template for html viewing
// components object has key and value
// can shorten to single word if key and value are the same
// @ is same as v-on: directive syntax wired to events in child
// :videos is same as v-bind:videos, re-renders props in child)

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    data() {
        return { videos: [], selectedVideo: null }
    },
    methods: {
        onVideoSelect(video) {
            this.selectedVideo = video;
        },
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