import ListView from '../views/ListView'
import bus from '../utils/bus'

// get function
export default function createListView (name) { // (1) get name
    return { // reusable instance or component Option
        name: name,
        created() { // reusable logic
            console.log(11111);
            bus.$emit('start:spinner'); 
            setTimeout(() => { 
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                    })
                    .catch(err => console.log(err));
            }, 1500);
        },
       // (2) rendering
       render(createElement) {
            console.log(22222);
            return createElement(ListView);
       }
    }
}