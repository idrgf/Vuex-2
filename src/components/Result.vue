<template>
    <div>
        {{ counter }}
    </div>
</template>

<script>
    export default {
        computed: {
            counter(){
                return this.$store.state.counter
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>