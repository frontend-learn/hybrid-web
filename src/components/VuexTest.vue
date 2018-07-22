<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ count2 }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>
      <button @click="increment2">2+</button>
      <button @click="decrement2">2-</button>
    </p>
    <p>
      {{countPlusLocalState}}
      {{countPlusLocalState2}}
      {{countAlias}}
    </p>
    <p>
      {{localComputed}}
    </p>
    <p>
      {{doneTodosCount}}
      {{doneTodos}}
      {{getTodoById}}
    </p>
    <p>
      <button @click="qhm">ufo-</button>
    </p>
  </div>
</template>

<script>
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button
} from 'cube-ui'
import {mapState, mapGetters, mapMutations} from 'vuex'
import {INCREMENT} from '../store/mutation-types'

const QHM = 'qhm'
let ufo = mapState({
  count: state => state.count,
  // 箭头函数可使代码更简练
  count2: state => state.count2,
  // 传字符串参数 'count' 等同于 `state => state.count`
  countAlias: 'count2',

  // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  countPlusLocalState (state) {
    return state.count2 + this.localCount
  },
  countPlusLocalState2: (state) => {
    // this上下文vue已经帮你绑定了，如果这样做，会让this变成运行时的父级this
    return state.count2 + this.localCount
  }
})
console.log(ufo)

export default {
  name: 'VuexTest',
  data () {
    return {
      msg: 'VuexTest',
      localCount: 90
    }
  },
  computed: {
    localComputed () {
      return this.msg + '----'
    },
    doneTodosCount2 () {
      return this.$store.getters.doneTodosCount
    },
    doneTodos2 () {
      return this.$store.getters.doneTodos
    },
    getTodoById2 () {
      return this.$store.getters.getTodoById(2)
    },
    ...ufo,
    ...mapGetters([
      'doneTodos',
      'doneTodosCount',
      'getTodoById'
    ])
  },
  methods: {
    showDialog () {
      this.$createDialog({
        type: 'alert',
        title: 'Alert',
        content: 'dialog content'
      }).show()
    },
    increment () {
      this.$store.commit(INCREMENT)
    },
    [QHM] () {
      console.log('qhm', QHM, [QHM])
    },
    decrement () {
      this.$store.commit('decrement')
    },
    increment2 () {
      this.$store.commit('increment2', {
        amount: 10
      })
    },
    decrement2 () {
      this.$store.commit('decrement2')
    },
    ...mapMutations(['increment'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
