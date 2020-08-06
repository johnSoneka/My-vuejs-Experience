<template>
  <div id="app">
    <navBar/>
    <router-view/>
  </div>
</template>
<script>
import navBar from '@/contents/navBar.vue';
export default {
  components:{
    navBar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
