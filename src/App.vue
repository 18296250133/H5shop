<template>
  <div id="app">
      <maintabbar></maintabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  components:{
    maintabbar:()=> import('./components/content/tabbar/maintabbar')
  }
}
</script>
<style lang="scss">
  @import url(./assets/css/normalize.css);
 

</style>
