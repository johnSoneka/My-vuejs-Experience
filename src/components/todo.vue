<template>
    <div class="todos container">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        <img :src="todo.imageUrl" alt="">{{todo.title}}</div>

        <div class="todo" v-for="image in singleImage" :key="image.id">
        <img :src="image.imageUrl" alt="">{{image.id}}</div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default{
  name : 'todo',
  computed: mapGetters(['allTodos', 'singleImage'])
}
</script>