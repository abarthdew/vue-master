<template>
    <div>
        <h3>{{ this.$store.state.item.title }}</h3>
        <textarea cols="50" rows="8" :value="this.$store.state.item.content" />
        </div>
</template>

<script>
export default {
    created() {
        const itemId = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>
