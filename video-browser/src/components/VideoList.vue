<template>
    <ul class="list-group">
        <VideoListItem 
            v-for="video in videos" 
            :video="video" 
            :key="video.etag">
        <div>video</div>
        </VideoListItem>
    </ul>
</template>

<script>
// use {{ name }}
// props: ['videos'] is an array element
// props: { videos: } is an array of object
// Array sets the type
// v-for directive is building lists
// had to use "video" and insert a v-bind key to avoid errors

import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: ['videos']
}
</script>

<style scoped>

</style>