<template>
    <div>
        <li v-for="job in getJobs" :key="job.id">
            <span class="point">{{ job.points || 0 }}</span>
            <a :href="job.url" class="title">
                {{ job.title }}
            </a>
            <small>{{ job.time_ago }} {{ job.user }}</small>
            <hr>
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
