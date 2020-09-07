<template>
    <div>
        <p v-if="countLinks < 2">Il y a {{ countLinks }} lien</p>
        <p v-else>Il y a {{ countLinks }} liens</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Stats',
        computed: {
            ...mapGetters([
                'countLinks'
            ])
        }
    }
</script>

<style lang="sass" scoped>

</style>