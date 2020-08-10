<template>
    <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name:'counter',
        methods:{
            ...mapMutations([
                'increment',
                'decrement'
            ])
            
        }
    }
</script>

<style lang="sass" scoped>

</style>