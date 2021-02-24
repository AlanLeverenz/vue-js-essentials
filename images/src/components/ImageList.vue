<template>
    <div>
        Image List
    </div>
</template>

<script>
import { mapActions } from 'vuex';

// created() is a lifecycle method
export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    created() {
        this.fetchImages();
    }
}
</script>