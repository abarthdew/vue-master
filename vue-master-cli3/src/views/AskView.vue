<template>
    <div>
        <li v-for="ask in asks" :key="ask.id">
            {{ ask.title }}
        </li>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    computed: {
        // 1
        ...mapState({
            asks: 'asks',
        }),
        // 2
        // asks () {
        //     return this.$store.state.asks;
        // },
        // 3
        // ...mapGetters({
        //     getAsks: 'getAsks'
        // }),
    },
    created() {
        this.$store.dispatch('FETCH_ASKS');
    }
}
</script>