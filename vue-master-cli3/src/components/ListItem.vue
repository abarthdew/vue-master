<template>
    <div>
        <li v-for="news in getNews" :key="news.id">
            <span class="point">{{ news.points }}</span>
            <a :href="news.url" class="title">
                {{ news.title }}
            </a>
            <small>{{ news.time_ago }}
                <router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
            </small>
            <hr>
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