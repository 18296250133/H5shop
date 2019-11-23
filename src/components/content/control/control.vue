<template>
    <div class="box">
        <div class="item" v-for="(value,index) in list_category" :key="index">
             <div :class="{active:currentIndex==index}">
                 <span>{{value}} </span>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'control',
    props:{
        list_category:{
        type:Array
        }
    },
    data(){
        return{
            currentIndex:0
        }
    }
}
</script>


<style lang="scss" scoped>
  .box {
      display: flex;
      text-align: center;
      height: px(40);
      line-height: px(40);
  }
  .item {
      flex:1;
  }

  .active {
      color: pink;
  }
</style>