<template>
    <div class="tab-item" @click="clickitem">
         <div v-if="!isActive">
         <slot  name="item-icon"></slot>
         </div>
         <div  v-else><slot name="item-icon-active"></slot></div>
         
   <div  :style="activeSyle"><slot name="item-text"> </slot></div>
             
               
 </div>
</template>

<script>
export default {
     name:'tabitem',
     props:{
         path:String,
         activecolor:{
           type: String,
           default: 'red'
      }
     },
     data(){
         return{
        //    isActive:ture
         }
     },
     computed:{
        isActive(){
              return this.$route.path.indexOf(this.path) !== -1
         },
         activeSyle(){
            //  console.log(this.isActive);
             return this.isActive ? {color:this.activecolor} : {} 
         }
     },
     methods:{
         clickitem(){
            //  console.log(this.path);
             this.$router.replace(this.path);
         },
         
     }
}
</script>

<style lang="scss" scoped>
 .tab-item {
     flex: 1;
     text-align: center;
     height: px(49);
  }
  .tab-item img {
      height: px(25);
      width: px(25);
      vertical-align: middle
  }
</style>