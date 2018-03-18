<template>
   <div class="container" id="app">
     <HeadNav></HeadNav>
    <h1>Weather Service</h1>
    <router-view/>
  </div>
</template>

<script>
import HeadNav from '@/components/HeadNav'
export default {
  name: 'app',
  components: {
    HeadNav:HeadNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 75%;
  margin: 20px auto;
}
</style>
