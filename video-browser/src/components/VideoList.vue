<template>
    <ul class="list-group col-md-8">
        <VideoListItem 
            v-for="video in videos" 
            :video="video" 
            :key="video.etag">
            @videoSelect="onVideoSelect"
        >
        </VideoListItem>
    </ul>
</template>

<script>
// v-for directive is building lists

import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: ['videos'],
    methods: {
        onVideoSelect(video){
            this.$emit('videoSelect', video);
        }
    }
}
</script>

<style scoped>

</style>