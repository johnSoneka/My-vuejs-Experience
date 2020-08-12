<template>
  <div class="home container-fluid">
    <carousel>
      <carousel-slide>
        Salut le gents
        <img src="https://picsum.photos/id/1/620/300" alt="john">
      </carousel-slide>
      <carousel-slide>
        Bien le gents
        <img src="https://picsum.photos/id/2/20/300" alt="john">
      </carousel-slide>
      <carousel-slide>
        john le gents
        <img src="https://picsum.photos/id/3/420/300" alt="john">
        <img src="https://picsum.photos/id/3/420/300" alt="john">
      </carousel-slide>
    </carousel>
    
  </div>
</template>

<script>
// @ is an alias to /src

import carousel from '../components/carousel/Carousel';
import carouselSlide from '../components/carousel/CarouselSlide'


export default {
  name: 'Home',
  components: {
    carousel,
    carouselSlide
  }
}
</script>
<style lang="scss" scoped>


</style>