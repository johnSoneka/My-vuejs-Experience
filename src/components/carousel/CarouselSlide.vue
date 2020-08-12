<template>
    <transition name="slide">
        <div v-show="visible">
        index : {{index}}
        visible ? {{visible}}
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    data () {
        return{
            index: 0
        }
    },
    computed:{
        visible (){
            return this.index == this.$parent.index
        }
    }
}
</script>