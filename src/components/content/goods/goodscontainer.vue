<template>
    <div class="containers">         
             <goodsitem v-for="(value,index) in goodcurrentlist" :key="index"
              :good_items="value" class="gooditem" 
              ></goodsitem>  
    </div>
</template>


<script>
export default {
    name:'goodscontainer',
    props:{
        goodcurrentlist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        goodsitem:()=> import('./goodsitem.vue')
    },
    created(){
        //console.log("goodcurrentlist:",this.goodcurrentlist)
    }
    
}
</script>

<style lang="scss" scoped>
  .containers >.gooditem {
      width: 47%;
  }

  .containers {
      margin-top: px(10);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
  }
</style>