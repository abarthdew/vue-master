import bus from '../utils/bus'

export default {
    // reusable component option
    created() { 
        bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch(err => console.log(err));
        }, 1500);
    },
}