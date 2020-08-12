<template>
    <div class="carousel">
        <slot></slot>
        <div class="button-nav">
            <button class="prev" @click="prev">Prev</button>
            <button class="next" @click="next">Next</button>
        </div>
        
    </div>
</template>
<script>
export default {
    
    data () {
       
        return{
            index: 0,
            slides: []
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
            if(this.index >= this.slideCount){
                this.index = 0
            }
        },
        prev (){
            this.index --
            if(this.index < 0){
                this.index = this.slideCount -1
            }
        },
        
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
}
</style>