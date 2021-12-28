<template>
    <div>
        <li v-for="user in users" :key="user.id">
            {{ user.title }}
        </li>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index';

export default {
    data() {
        return {
            users: [],
        }
    },
    created() {
        fetchNewsList()
        .then(res => {
            this.users = res.data;
            console.log(res.data)
        })
        .catch(err => console.log(err));
    }
}
</script>