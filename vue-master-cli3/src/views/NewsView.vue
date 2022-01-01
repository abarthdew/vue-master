<template>
    <div>
        <li v-for="news in getNews" :key="news.id">
            <a :href="news.url">
                {{ news.title }}
            </a>
            <small>{{ news.time_ago }} {{ news.domain }}</small>
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