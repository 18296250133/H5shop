<template>
    <div class="box">
        <div class="item" v-for="(value,index) in list_category" :key="index" @click="isclick(index)">
             <div :class=" {active:currentIndex==index} ">
                 <span  class="content">{{value}} </span>
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
    },
    methods:{
        isclick(index){
            //console.log(index);
            this.currentIndex=index;
            this.$emit('getindex',index)
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
  span {
      padding-bottom: px(6);
  }

  .active {
      color: #ff5777;
     
  }

   .active span {
      border-bottom: px(2) solid #ff5777;
   }
</style>