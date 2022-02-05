<template>
    <div>
        <button @click="loginUser">login</button>
        <h1>List</h1>
    </div>
</template>

<script>
import axios from 'axios'
import { handleException } from './utils/handleException'

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
        },
        async loginUser2() {
            try {
                var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                if (response.data.id === 1) {
                    var response2 = await axios.get('https://jsonplaceholder.typicode.com/todos');
                    console.log(response2);
                }
            } catch(error) {
                handleException(error);
                console.log(error);
            }
        }
    }    
}
</script>