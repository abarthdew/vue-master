<template>
    <div>
        <li v-for="user in users" :key="user">
            {{ user.title }}
        </li>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
        }
    },
    created() {
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(res => {
            console.log(res.data)
            this.users = res.data;
        })
        .catch(error => console.log(error));
// ==>  // new Promise()
        // .then(function(response) {
        //     console.log(response);
        // })
        // .catch(function() {

        // })
    }
}
</script>