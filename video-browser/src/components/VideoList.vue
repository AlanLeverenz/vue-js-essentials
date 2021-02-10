<template>
    <ul>
        VideoList
        {{ videos.length }}
    </ul>
</template>

<script>
// use {{ name }}
// props: ['videos'] is an array element
// props: { videos: } is an array of object
// Array sets the type
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