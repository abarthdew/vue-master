<template>
    <div>
        <li v-for="ask in asks" :key="ask.id">
            {{ ask.title }}
        </li>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index'

export default {
    data() {
        return {
            asks: [],
        }
    },
    created() {
        fetchAskList()
        .then(res => {
            this.asks = res.data;
        })
        .catch(err => console.log(err));
    }
}
</script>