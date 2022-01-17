<template>
    <div>
        <section>
            <div style="margin:5px; padding:10px; background:#9acd32; width: 200px;">
                [UserName]
            <!-- slot: difinition at parents component-->
            <slot name="username"></slot><br>
            <slot name="time"></slot>
            </div>
            <slot name="karma"></slot>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        userInfo: Object,
    },
}
</script>