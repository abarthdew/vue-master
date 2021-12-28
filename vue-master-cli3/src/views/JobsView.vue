<template>
    <div>
        <li v-for="job in jobs" :key="job.id">
            {{ job.title }}
        </li>
    </div>
</template>

<script>
import { fetchJobList } from '../api/index';
export default {
    data () {
        return {
            jobs: [],
        }
    },
    created() {
        fetchJobList()
        .then(res => {
            this.jobs = res.data;
        })
        .catch(err => console.log(err));
    }
}
</script>
