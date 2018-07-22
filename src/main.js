// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cube from 'cube-ui'
import Vuex from 'vuex'
import {INCREMENT} from './store/mutation-types'

Vue.config.productionTip = false
Vue.use(Cube)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    count2: 100,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    [INCREMENT]: state => state.count++,
    decrement: state => state.count--,
    increment2: (state, payload) => {
      state.count2 += payload.amount
    },
    decrement2: state => state.count2--
  },
  actions: {
    increment (context) {
      context.commit(INCREMENT)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
