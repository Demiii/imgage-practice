<template>
  <div id="app">
    <HelloWorld/>
    <div class="box"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url('https://pic8.58cdn.com.cn/nowater/fangfe/n_v2a0cc263dc354415b87d7fae269e61bd3.png')
}
.box {
  background-image: url('https://pic8.58cdn.com.cn/nowater/fangfe/n_v2a0cc263dc354415b87d7fae269e61bd3.png')
  
}
</style>
