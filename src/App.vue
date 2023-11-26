<template>


  <div id="app" class="app-container">
    <getHeader />

    <div class=container>
      <div class="column edge">
      </div>
      <div class="column center">
        <RouterView/>
      </div>
      <div class="column edge">
      </div>
    </div>

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
@import '~bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

}
html{
  background-color: #B2C8BA;
}
.app-container {
  background-color: #B2C8BA;
  min-height: 100vh;
  margin:0;

  max-width: 100%;
}
.container {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
}

.column.edge{

  flex:1;
  padding-top: 20px;
  padding-bottom: 20px;



}
.column.center{
  flex: 2;
  padding-top: 10px;
  padding-bottom: 10px;


}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }


  .column.edge {
    display: none;
    margin-bottom: 10px;
    flex: none;
  }
}
</style>
