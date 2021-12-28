<template>
    <div class="header">
        <router-link to="/news">News</router-link>&nbsp;|&nbsp;
        <router-link to="/ask">Ask</router-link>&nbsp;|&nbsp;
        <router-link to="/jobs">Jobs</router-link>&nbsp;|&nbsp;
        <!-- <router-link to="">This is Anchor Tag.</router-link>     -->
        <!-- to="Url what you want to go" -->   
        <router-link to="/user">User</router-link>&nbsp;|&nbsp;
        <router-link to="/item">Item</router-link>
    </div>
</template>

<style lscoped>
    .header {
        padding: 8px;
        display: flex;
        background-color: #42b883
    }
    .header .router-link-exact-active {
        color: green;
    }
    .header a {
        color: white;
    }
</style>