<template>
  <div class="home container-fluid">
    <carousel>
      <carousel-slide v-for="n in slides" :key="n">
        <div class="text"> Slide {{n}}</div> 
        <img :src="'https://picsum.photos/id/' +(n+3)+ '/800/300'"  width="100%" alt="john">
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
  data (){
    return {
      slides: 10
    }
  },
  components: {
    carousel,
    carouselSlide
  }
}
</script>
<style lang="scss" scoped>
.home{
  margin: 0;
  padding: 0;
}
.text{
  right: 0;
  left: 0;
  text-align: center;
  top: 90%;
  font-size: 34px;
  position: absolute;
  color: red;
}

</style>