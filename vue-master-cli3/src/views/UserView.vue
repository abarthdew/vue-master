<template>
    <div>
        <user-profile :userInfo="userInfo">
            <template slot="username">
                <li>id : {{ userInfo.id }}</li>
                <li>karma : {{ userInfo.karma }}</li>
                <li>created : {{ userInfo.created }}</li>
                <li>about : {{ userInfo.about }}</li>
            </template>
            <div slot="karma">karma: {{ userInfo.karma }}</div>
        </user-profile>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapState({
            userInfo: 'user',
        }),
    },
    created() {
        console.log(this.userInfo)
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
}
</script>