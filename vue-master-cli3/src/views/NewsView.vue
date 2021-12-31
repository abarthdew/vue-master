<template>
    <div>
        <li v-for="user in getNews" :key="user.id">
            {{ user.title }}
        </li>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            getNews: 'getNews',
        }),
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
}
</script>