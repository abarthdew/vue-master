<template>
    <list-item/>
</template>

<script>
import ListMixin from '../mixins/ListMixin'
import ListItem from '../components/ListItem.vue'

export default {
    components: {
        ListItem,
    },
    Mixins: [ListMixin]
}
</script>