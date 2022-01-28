import ListView from './ListView.vue'

// get function
export default function createListView (name) { // (1) get name
    return { // reusable instance or component Option
        /* ex)
            el: '',
            data: '',
            components: {

            },
            created() {

            }
        */
       name: name,
       // (2) rendering
       render(createElement) {
            return createElement(ListView);
       }
    }
}