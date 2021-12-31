<template>
    <div>
        <li v-for="job in getJobs" :key="job.id">
            {{ job.title }}
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
