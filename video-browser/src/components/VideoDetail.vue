<template>
    <div>
        ({ video.snippet.title })
    </div>
</template>

<script>
// ({ }) holds a variable object that needs interpreting
export default {
    name: 'VideoDetail',
    props: ['video']
}
</script>

<style scoped>

</style>