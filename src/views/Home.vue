<template>
  <div class="home container-fluid">
    <carousel>
      <carousel-slide>
        Salut le gents
        <img src="https://picsum.photos/id/1/800/300" alt="john">
      </carousel-slide>
      <carousel-slide>
        Bien le gents
        <img src="https://picsum.photos/id/2/800/300" alt="john">
      </carousel-slide>
      <carousel-slide>
        john le gents
        <img src="https://picsum.photos/id/3/800/300" alt="john">
        

      </carousel-slide>
    </carousel>
<!--<carousel>
    <carousel-slide>
         <img class="mx-3" src="https://picsum.photos/id/7/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/1/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/90/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/3/250/300" alt="john">
      </carousel-slide>
      <carousel-slide>
 
        <img class="mx-3" src="https://picsum.photos/id/2/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/3/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/5/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/3/250/300" alt="john">
      </carousel-slide>
      <carousel-slide>
        <img class="mx-3" src="https://picsum.photos/id/3/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/3/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/7/250/300" alt="john">
        <img class="mx-3" src="https://picsum.photos/id/12/250/300" alt="john">

      </carousel-slide>
    </carousel> -->
    
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