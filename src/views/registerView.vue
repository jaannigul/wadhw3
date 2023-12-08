<template>
  <div>
      <loginBox/>
  </div>
 </template>
 
 <script>
  //import { mapState } from 'vuex';
  import loginBox from '@/components/signup.vue';

  export default {
    name: 'registerView',
    components: {
      loginBox
    },
    computed: {},
    created() {},
    methods: {}
  }
 </script>
 
 <style scoped>
 </style>