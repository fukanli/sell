<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/comments">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>

  

</template>

<script type="text/ecmascript-6">

</script>

<style rel="stylesheet/stylus" scoped>
  div.tab{display:flex;height:25px;line-height:25px}
  div.tab div.tab-item{flex:1;text-align:center}
  div.tab div.tab-item a{text-decoration: none}
</style>
