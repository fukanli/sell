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
  data () {
    return {
      seller: {}
    };
  },
  created () {
    this.$http.get('/api/index').then((response) => {
      console.log(response);
    }, (response) => {
      console.log(response);
    });
  },
  components: {
    myheader,
    mytab
  }
};
</script>

<style>

</style>
