<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Rete />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Rete from '@/components/rete.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
