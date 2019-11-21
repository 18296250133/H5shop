<template>
    <div class="box" :style="checkcolor">
         <div class="left"><slot name="left"></slot></div>

         <div class="center"><slot name="center"></slot></div>

         <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'navbar',
    props:{
        bgcolor:{
            type:String,
            default:'white'
    },
    fontcolor:{
         type:String,
            default:'black'
    }
},
 computed:{
    checkcolor(){
        return {'background-color':this.bgcolor,color:this.fontcolor}
    }
 }

}
</script>

<style lang="scss" scoped>
  .box {
      display: flex;
      height: px(47);
      line-height: px(47);
      width: 100%;
      
  }
  .left ,.right{
      
      width: 25%;
  }
  .center {
      width: 50%;
      
      text-align: center;
  }
</style>