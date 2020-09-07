<template>
    <div>
        <form @submit.prevent="addLink">
            <input
                v-model="newLink"
                type="text"
                placeholder="add link"
                @keyup.enter="addlink" />
        </form>

        <button @click="removeAllLinks">remove all Links</button>

        <p>{{ msg }}</p>
        <ul>
            <li v-for="(value, index) in liste"
                :key="value.id">
                {{index}} | {{ value }}
                <button @click="removeLinks(index)">x</button>
            </li>
        </ul>
        <stats/>
    </div>
</template>

<script>
    import Stats from '@/components/Stats'
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
        name:'Todo',
        data() {
            return {
                newLink: '',
                msg: ''
            }
        },
        components: {
            Stats
        },
        computed: {
            ...mapState([
                'liste'
            ])
        },
        methods: {
            ...mapMutations([
                'ADD_LINK',
                'REMOVE_ALL'
            ]),
            ...mapActions([
                'removeLink',
                'removeAll'
            ]),
            addlink: function() {
                this.ADD_LINK(this.newLink)
                this.newLink = ''
            },
            removeLinks: function(value) {
                this.removeLink(value)
            },
            removeAllLinks(){
                this.removeAll().then(() => {
                this.msg = 'tout a ete supp'
            })
            }
            
        }
    }
</script>

<style lang="sass" scoped>
li
    list-style: none
</style>