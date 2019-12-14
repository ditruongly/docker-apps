<template>
  <div id="app">
    <HelloWorld :msg="message"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return {
      message: 'Hello World!'
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #8bd49b;
  margin-top: 60px;
}
</style>
