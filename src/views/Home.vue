<template>
  <div class="home container-fluid">
  <!--
    <div>
    -- main Carourel--
    <carousel class="mb-5">
      <carousel-slide v-for="n in slides" :key="n" >
        <div class="text"> Slide {{n}}</div> 
        <img :src="require(`../assets/img/main/${n}.jpg`)"  width="100%" height="450" :alt="n">
      </carousel-slide>
    </carousel>
    <h1>HELO</h1>
    -- Images Carousel with pagination --
    <carousel-pagination class="carou" @keydown.esc="imageShow = !imageShow">
      <pagination-slide v-for="n in slides" :key="n" >
        <div class="slide-catalogue"
            :class="{active : imageShow}"
            @click="imageShow= !imageShow">
          <img :src="require(`../assets/img/${n}.jpg`)"  width="95%" height="150" :alt="n">
          <p>Tittle <br> Description of the products and the price {{n}}</p>
        </div>
        <div class="slide-catalogue">
          <img :src="require(`../assets/img/${n+1}.jpg`)" width="95%" height="150" :alt="n">
          <p>Tittle <br> Description of the products and the price {{n+1}}</p>
        </div>
        <div class="slide-catalogue">
          <img :src="require(`../assets/img/${n+2}.jpg`)"  width="95%" height="150" :alt="n">
          <p>Tittle <br> Description of the products and the price {{n+2}}</p>
        </div>
        <div class="slide-catalogue">
          <img :src="require(`../assets/img/${n+3}.jpg`)"  width="95%" height="150" :alt="n"> 
          <p>Tittle <br> Description of the products and the price {{n+3}}</p>
        </div>
        <div class="slide-catalogue">
          <img :src="require(`../assets/img/${n+4}.jpg`)"  width="95%" height="150" :alt="n"> 
          <p>Tittle <br> Description of the products and the price {{n+4}}</p>
        </div>        
      </pagination-slide>
    </carousel-pagination>
    !-- Single Image Display --
    <div class="big-image" tabindex="1" v-if="imageShow" @keydown.esc="close()">
      <p class="text-danger float-right" @click="imageShow =!imageShow">close</p>
      <simple-carousel class="main-image float-left m-4">
        <simple-slide v-for="n in 3" :key="n" >
          <img :src="require(`../assets/img/simple/${n}${n}.jpg`)"  width="100%" height="300" :alt="n">
        </simple-slide>
      </simple-carousel>
      <div class="container  bg-dark text-light p-4 ml-5">
        <h3>Lenovo</h3>
        <p class="">This product containess This product containess
          This product containess This product containess
          This product containess
        </p>
        <button class="btn text-light btn-outline-success">Add to Chat</button>
      </div>
    </div>
    <h1>I am here</h1>
    <div v-for="n in 5" :key="n" :temp="3">index {{n}}</div>
    !--
    <carousel>
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
    </carousel> 
    --
  </div>
  -->

  <todo></todo>
  </div>
</template>

<script>
// @ is an alias to /src
/*import simpleCarousel from '../components/carousel/simpleImage/simpleCarousel';
  import simpleSlide from '../components/carousel/simpleImage/simpleSlide';
  import carousel from '../components/carousel/Carousel';
  import carouselSlide from '../components/carousel/CarouselSlide'
  import carouselPagination from '../components/carousel/pagination/carouselPagination';
  import paginationSlide from '../components/carousel/pagination/paginationSlide';
*/
import todo from '../components/todo';

export default {
  name: 'Home',
  data (){
    return {
     /* slides: 4,
      n: 2,
      imageShow: false,*/
    }
  },
  components: {
  /* carousel,
    carouselSlide,
    simpleCarousel,
    simpleSlide,
    carouselPagination,
    paginationSlide 
  */
 todo
  },
  methods:{
  /*
    getImg(n){
      var images = require.context('../assets/img/')
      return images('./' +n+ ".jpg")
    },
    addSlide(){
      this.slides= slides
    } 
  */
  }
}
</script>
<style lang="scss" scoped>
/*.home{
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
  .slide-catalogue{
    position: relative;
    float: left;
    padding: 12px 22px;
    margin: 0 1.5%;
    background: #fffcfc;
    width: 17%;
    border-radius: 10px;
    border: 2px groove rgb(131, 131, 131);
  }
  .big-image{
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    padding: 10% 15%;
    position: relative;
    position: fixed;;
    .main-image{
    width: 600px;
    }
  }
  .carou{
    float: left;
  }
  .active{
    border: 2px solid red;
  }
*/
</style>