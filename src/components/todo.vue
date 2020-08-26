<template>
    <div class="todos container">
      <div class="todo">
        <label for="">name</label><br>
        <input type="text" v-model="name">
        <input type="text" v-model="imgUrl">
        <button @click="addName()">add</button>
      </div>
      
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        <img :src="todo.imageUrl" alt="">{{todo.title}}</div>

        <div class="todo" v-for="image in singleImage" :key="image.id">
        <img :src="image.imageUrl" alt="">{{image.id}}</div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

import {nameRefs, imageUrl} from "@/firebase"


export default{
  name : 'todo',
  data (){
    return{
      name:'john',
      imgUrl: '',
      //
    }
  },
  computed: mapGetters(['allTodos', 'singleImage']),
  methods:{
    addName(){
      nameRefs.push({name: this.name, edit : false})
      imageUrl.push({imgUrl : this.imgUrl})
    }
  }
}
</script>