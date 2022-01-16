<template>
    <div>
        <li v-for="item in $store.state[listItems]" :key="item.id">
            <span class="point">{{ item.points || 0 }}</span>
            <a :href="item.url" class="title">
                {{ item.title }}
            </a>
            <p>
                <template v-if="item.domain">
                    <a :href="item.url">
                    {{ item.title }}
                    </a>
                </template>
                <template v-else>
                    <router-link :to="`/item/${item.id}`">
                    {{ item.title }}
                    </router-link>
                </template>
            </p>
            <small>{{ item.time_ago }} by
                <router-link v-if="item.user" :to="`/user/${item.user}`">
                    {{ item.user }}
                </router-link>
                <a v-else :href="item.url">
                    {{ item.domain || 'null' }}
                </a>
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