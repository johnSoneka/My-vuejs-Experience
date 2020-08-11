<template>
    <div class="top-nav">
        <router-link class="top-link" to="/">HOME</router-link>
        <router-link class="top-link" to="/about">ABOUT</router-link>
        <router-link class="top-link" to="/">SERVICES</router-link>
        <router-link class="top-link" to="/about">CONTACT</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.top-nav{
    padding: 1% 10%;
    background: rgb(136, 7, 7);
    float: left;
    width: 100%;
    .top-link{
        margin: 0% 1px;
        padding: 10px;
        color: rgb(203, 222, 240);
        text-decoration: none;
    }
    
}

</style>