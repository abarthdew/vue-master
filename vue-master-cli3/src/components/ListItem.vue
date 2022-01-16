<template>
    <div v-if="list">
        <li v-for="item in this.$store.getters[list]" :key="item.id">
            <span class="point">{{ item.points || 0 }}</span>
            <a :href="item.url" class="title">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }}
                <span v-if="router === 'news'">
                    <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
                </span>
                <span v-if="router === 'jobs'">
                    <a :href="item.url">
                    {{ item.domain }}
                    </a>
                </span>
                <span v-if="router === 'asks'">
                    <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                </span>
            </small>
            <hr>
        </li>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: null,
            router: null,
        }
    },
    created() {
        const name = this.$route.name;
        this.router = name;
        this.list = 'get' + name.substr(0, 1).toUpperCase() + name.slice(1);
        console.log(this.router, this.list)
        this.$store.dispatch(`FETCH_${name.toUpperCase()}`);
    },
}
</script>