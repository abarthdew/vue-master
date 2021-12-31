<template>
    <div>
        <li v-for="ask in getAsks" :key="ask.id">
            {{ ask.title }}
        </li>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            getAsks: 'getAsks',
        }),
    },
    created() {
        this.$store.dispatch('FETCH_ASKS');
    }
}
</script>