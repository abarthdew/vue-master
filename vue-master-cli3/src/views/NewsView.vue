<template>
    <div>
        <li v-for="user in news" :key="user.id">
            {{ user.title }}
        </li>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            news: 'news',
        }),
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
}
</script>