<template>
    <div>
        <section>
            <!-- question detail-->
            <div style="margin:5px; padding:10px; background:#9acd32; width: 90px;">
                [UserName]
                <!-- <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.id }}</router-link> -->
            </div>
        </section>
        <section>
            <!-- question answer-->
            <!-- <h3>{{ fetchedItem.title }}</h3> -->
            <div v-html="fetchedItem.content" style="border:1px solid #ddd; padding: 5px;"></div>
        </section>
    </div>
</template>