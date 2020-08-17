<template>
    <div class="carousel">
        <slot></slot>
        <div class="pagination ">
            <button class="btn" v-for="(n,index) in 3" :key="n" 
            
            @click="goto(n-1)"
            :class="{active : n == index}">
            <img class="" :src="require(`@/assets/img/simple/${n}${n}.jpg`)"  width="100%" height="60" :alt="n"> 
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            index: 0,
            slides: [],
            direction: null
        }
    },
    mounted () {
        this.slides = this.$children;
        this.slides.forEach((slide, i)=>{
            slide.index = i
        })
    },
    computed:{
        slideCount(){ return this.slides.length}
    },
    
    methods:{
        
        goto(index){
            this.direction = index < this.index ? 'right' : 'left'
            this.index = index
        }
    },
    
}
</script>
<style lang="scss" scoped>
.carousel{
    position: relative;
  
    .pagination{
        position: absolute;
        text-align: center;
        
        button{
            position: inline-block;
            margin: 4px;
            }
        .active{
            border: 3px solid red;
        }
    }
    
}
</style>