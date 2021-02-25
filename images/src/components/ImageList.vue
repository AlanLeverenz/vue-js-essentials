<template>
    <div>
        <img v-for="image in allImages" :src="image.link" :key="image.id"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

// created() is a lifecycle method
// fetchImages action 
// use computed property to read data into the component and make it accessible from the template
export default {
    name: 'ImageList',
    computed: mapGetters(['allImages']),
    methods: mapActions(['fetchImages']),
    created() {
        this.fetchImages();
    }
}
</script>