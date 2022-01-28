<template>
    <list-item/>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus'

export default {
    components: {
        ListItem,
    },
    created() {
        bus.$emit('start:spinner'); // send
        this.$store.dispatch('FETCH_ASKS') // get data
            .then(() => {
                bus.$emit('end:spinner'); // send
            })
            .catch(err => console.log(err));
    }
}
</script>
