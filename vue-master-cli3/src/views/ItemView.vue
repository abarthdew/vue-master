<template>
    <div>
        <section>
            <!-- user detail-->
            <user-profile :userInfo="fetchedItem">
                <div slot="username">{{ fetchedItem.user }}</div>
                <template slot="time">{{ fetchedItem.time_ago }}</template>
            </user-profile>
        </section>
        <section>
            <!-- question answer-->
            <h3>{{ fetchedItem.title }}</h3>
            <div v-html="fetchedItem.content" style="border:1px solid #ddd; padding: 5px;"></div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters({
            fetchedItem: 'fetchedItem',
        }),
    },
    created() {
        const itemId = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>
