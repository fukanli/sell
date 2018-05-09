<template>
  <div id="app">
    <myheader></myheader>
    <mytab></mytab>
    <router-view></router-view>
  </div>
</template>

<script>
import myheader from './components/header/header.vue';
import mytab from './components/tab/tab.vue';

export default {
  name: 'App',
  components: {
    myheader,
    mytab
  }
};
</script>

<style>

</style>
