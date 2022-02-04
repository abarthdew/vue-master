<template>
    <div>
        <button @click="loginUser">login</button>
        <h1>List</h1>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        loginUser() {
            axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if (response.data.id === 1 ) {
                    axios.get('https://jsonplaceholder.typicode.com/todos')
                    .then(response2 => console.log(response2))
                    .catch(error => console.log(error));
                }
            })
            .catch(error => console.log(error));
        }
    }    
}
</script>