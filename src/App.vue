<template>
  <MenuCubos/>
  <router-view></router-view>
  </template>
  
  <script>
  import MenuCubos from './components/MenuCubos.vue';
  
  export default {
    name: 'App',
    components: {
      MenuCubos
  }
  }
  </script>