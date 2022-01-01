<template>
    <div>
        <li v-for="job in getJobs" :key="job.id">
            <a :href="job.url">
                {{ job.title }}
            </a>
            <small>{{ job.time_ago }} {{ job.user }}</small>
        </li>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            getJobs: 'getJobs',
        }),
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>
