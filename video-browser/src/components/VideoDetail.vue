<template>
    <div class="details" v-if="video">
        {{ video.snippet.title }}
    </div>
</template>

<script>
// {{ }} holds a variable object that needs interpreting
export default {
    name: 'VideoDetail',
    props: ['video']
}
</script>

<style scoped>
    .details {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>