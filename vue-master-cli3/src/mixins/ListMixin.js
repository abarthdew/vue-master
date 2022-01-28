import bus from '../utils/bus'

export default {
    // reusable component option
    created() { 
        bus.$emit('start:spinner');
        // #1
        console.log(1);
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        // #5
            .then(() => {
                console.log(5);
                bus.$emit('end:spinner');
            })
            .catch(err => console.log(err));
    },
}