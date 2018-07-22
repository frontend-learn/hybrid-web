<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hybrid Course Link</h2>
    <cube-button @click="showDialog">show dialog</cube-button>
  </div>
</template>

<script>
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button
} from 'cube-ui'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Hybrid App'
    }
  },
  methods: {
    showDialog () {
      this.$createDialog({
        type: 'alert',
        title: 'Alert',
        content: 'dialog content'
      }).show()
    }
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
