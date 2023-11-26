<template>
    <footer>
        <p><strong>PostIt</strong></p>
        <p>© 2023 PostIt. All rights reserved.</p>
        <p><router-link to="/">Terms of Service</router-link> | <router-link to="/">Privacy Policy</router-link></p>
    </footer>
</template>

<script>
    export default {
    name: "getFooter",
}
</script>
<style scoped>
footer{
    border-radius: 10px;
    background-color: #D2E3C8;
    align-items: center;
    text-align: left;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;

    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
}
</style>