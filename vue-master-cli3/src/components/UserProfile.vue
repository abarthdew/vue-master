<template>
    <div>
        <section>
            <div style="margin:5px; padding:10px; background:#9acd32; width: 90px;">
                [UserName]
            </div>
            <li>id : {{ userInfo.id }}</li>
            <li>karma : {{ userInfo.karma }}</li>
            <li>created : {{ userInfo.created }}</li>
            <li>about : {{ userInfo.about }}</li>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    }
}
</script>