<template>
    <div>
        <li>{{ user.id }}</li>
        <li>{{ user.karma }}</li>
        <li>{{ user.created }}</li>
        <li>{{ user.about }}</li>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            user: 'user',
        }),
    },
    created() {
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
}
</script>