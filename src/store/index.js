import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    todo
  }
})
/* import Vue from 'vue'
 import Vuex from 'vuex'
 import todos from './modules/todos'

 Vue.use(Vuex)

 export default new Vuex.Store({
  modules:{
    todos
  },
 state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }

  })
*/