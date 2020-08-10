<template>
    <div class="top-nav">
        <router-link classs="top-link" to="/">Home</router-link>
      <router-link classs="top-link" to="/about">About</router-link>
      <router-link classs="top-link" to="/">Services</router-link>
      <router-link classs="top-link" to="/about">Contacts</router-link>
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
    .top-link{
        margin: 0% 550px;
        color: rgb(203, 222, 240);
    }
}
</style>