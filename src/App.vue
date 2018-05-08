<template>
  <div id="app">
    <myheader></myheader>
    <div class="tab"> i am tab</div>
    <div class="content"> i am content</div>
  </div>
</template>

<script>
import Header from './components/header/header.vue';
export default {
  components: {
    Myheader: Header
  }
};
</script>

<style>

</style>
