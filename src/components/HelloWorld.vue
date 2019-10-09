<template>
  <div class="hello">
    <img class="common-jpg" src='../assets/progressive-jpg-test.jpg'>
    <img class="progressive-jpg" src='../../dist/images/progressive-jpg-test.jpg'>
    <!-- <img src="../../dist/images/test.gif"> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display: flex;
}
.common-jpg, .progressive-jpg {
  width: 600px
}

</style>
