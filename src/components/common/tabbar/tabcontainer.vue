<template>
    <div class="tab-bar">
         <slot></slot>
        
     </div>
</template>
<script>

export default {
    name:'tabcontainer',
    components:{
        
    }
}
</script>
<style lang="scss" scoped>
    .tab-bar {
    display: flex;
    height: px(49);
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: px(14);
    
  }
  
</style>