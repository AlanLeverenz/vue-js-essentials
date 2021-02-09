<template>
    <div>
        <input @input="onInput" />
    </div>

</template>

<script>
export default {
    // v-on:input="onInput" is longhand version of input directive
    // emit function event has name and value
    // $ is not a special character
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            this.$emit('termChange', event.target.value)
        }
    }
};
</script>

<style scoped>

</style>