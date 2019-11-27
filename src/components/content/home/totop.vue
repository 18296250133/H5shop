<template>
    <div class="totops">
        <img src="../../../assets/img/common/top.png"/>
       
    </div>
</template>

<script>
export default {
    name:'totop'
}
</script>

<style lang="scss" scoped>
  .totops{
       width: px(50);
       height: px(50);
       position: fixed;
       bottom: px(50);
       right: px(5);
       z-index: 9;
   }

  .totops img {
      width: 100%;
      height: 100%;
  }
</style>