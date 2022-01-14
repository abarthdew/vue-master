<template>
    <div>
        <li v-for="ask in asks" :key="ask.id">
            <a :href="ask.url" style="font-weight:bold; color: black;">
                {{ ask.title }}
            </a> |
            <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link>
            <small>{{ ask.time_ago }} {{ ask.user }}</small>
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