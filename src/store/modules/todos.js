
const state ={
    todos: [
        {
          id: 1,
          title: 'Todo One',
          imageUrl: require(`@/assets/img/1.jpg`)
        },
        {
          id: 2,
          title: 'Todo Two',
          imageUrl: require(`@/assets/img/2.jpg`)
        }
    ],
    singleImg:[
        {
            id:1,
            imageUrl: require(`@/assets/img/1.jpg`)
        }
    ]
};
const getters = {
    allTodos: (state) => state.todos,
    singleImage : (state) =>state.singleImg
};
const mutations = {};
const actions = {};

export default{
    state,
    getters,
    mutations,
    actions
}
