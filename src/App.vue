<template>
  <div id="app">
    <myheader></myheader>
    <mytab></mytab>
    <mycontent></mycontent>
  </div>
</template>

<script>
import myheader from './components/header/header.vue';
import mytab from './components/tab/tab.vue';
import mycontent from './components/content/content.vue';
export default {
  name: 'App',
  components: {
    myheader,
    mytab,
    mycontent
  }
};
</script>

<style>

</style>
