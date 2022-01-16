<template>
    <div>
        <li v-for="item in $store.state[listItems]" :key="item.id">
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
    computed: {
        listItems() {
            if (this.router === 'news') {
                return 'news';
            } else if (this.router === 'jobs') {
                return 'jobs';
            } else if (this.router === 'asks') {
                return 'asks';
            }
        }
    },
    created() {
        const name = this.$route.name;
        this.router = name;
        this.$store.dispatch(`FETCH_${name.toUpperCase()}`);
    },
}
</script>