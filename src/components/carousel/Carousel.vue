<template>
    <div class="carousel">
        <slot></slot>
        <div class="button-nav">
            <button class="prev" @click="prev">Prev</button>
            <button class="next" @click="next">Next</button>
        </div>
        <div class="pagination">
            <button class="btn" v-for="n in slideCount" :key="n" 
            @click="goto(n-1)" :class="{active : n-1 == index}">{{n}}</button>
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
        next (){
            this.index ++

            this.direction = "right"
            if(this.index >= this.slideCount){
                this.index = 0
            }
        },
        prev (){
            this.index --

            this.direction = "left"
            if(this.index < 0){
                this.index = this.slideCount -1
            }
        },
        goto(index){
            this.direction = index < this.index ? 'right' : 'left'
            this.index = index
        }

        
    }
}
</script>
<style lang="scss" scoped>
.carousel{
    position: relative;
    
    .prev{
        position: absolute;
        top:50%;
        left: 10px;
    }
    .next{
        position: absolute;
        top:50%;
        right: 10px;
    }
    .pagination{
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        button{
            position: inline-block;
            background: black;
            color: #fff;
            font-size: 14px;
            height: 30px;
            margin: 4px;
           
            }
        .active{
            background: red;
        }
    }
    
}
</style>