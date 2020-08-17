<template>
    <div class="carousel">
        <slot></slot>
        
        <div class="pagination pt-3">
            <button class="btn prev pages" @click="prev"> * </button>
            <button class="btn pages" v-for="n in slideCount" :key="n" 
            @click="goto(n-1)"
            :class="{active : n-1 == index}">
            {{n}}
            </button>
            <button class="btn next pages" @click="next">>></button>
        </div>.
        
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
    },
    watch:{
        index : function(value){
            var vm = this;
            setTimeout(function() {
                vm.index += 1 ;
                if(vm.index > vm.$parent.slides -1 ){
                    vm.index = 0
                }
            },15000)
        }
    }
}
</script>
<style lang="scss" scoped>
.carousel{
    position: relative;
    
    .pagination{
        position: absolute;
        text-align: center;
        
        right: 0;
        .prev{
        
        bottom: 0;
        left: 0;
        position: inline-block;
        }
        .next{
        position: inline-block;
        bottom: 0;
        right: 0;
        }
        .pages{
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