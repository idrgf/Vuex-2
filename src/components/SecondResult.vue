<template>
    <div>
        second result: {{ doubleCounter }}
    </div>
</template>

<script>
    import{ mapGetters } from 'vuex'
    export default {
        name:'SecoundCounter',
        computed:{
            ...mapGetters([
            'doubleCounter'
        ])
        } 
        
    }
</script>

<style lang="sass" scoped>

</style>