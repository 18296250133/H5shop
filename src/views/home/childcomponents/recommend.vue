<template>
    <div class="box">
      <div class="item" v-for="(site,index) in recommend" :key="index"> 
            <img :src="site.image"/>
            <div class="text">{{site.title}}</div>
           
      </div>
    </div>
</template>
<script>
export default {
    name:'recommend',
    props:{
        recommend:{
            type:Array,
            defaule:[]
        }
    }
}
</script>

<style lang="scss" scoped>
  .box {
      display: flex;
      text-align: center;
      padding-top: px(8);
      border-bottom: px(10) solid #eee;

      
  }
  .text {
      color: #555;
font-size: px(15);
padding: px(10) 0;

  }
  .item {
      flex: 1;
  }
  .item img {
      height: px(75);
      width: px(75);
  }
</style>