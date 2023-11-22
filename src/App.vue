<template>
  
  
  <div id="app" class="app-container">
    <getHeader />
    <RouterView/>
    <getFooter />
  </div>
  
  
  
</template>

<script>

import getFooter from '@/components/footer.vue';
import getHeader from '@/components/header.vue';
export default {
  name: 'App',
  components: {
   
    getFooter,
    getHeader

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.app-container {
  background-color: #B2C8BA; /* Set your desired background color */
  min-height: 100vh;
}
</style>
