<template>
    <div class="box">
        <div>
          
             <goodsitem v-for="(value,index) in goodcurrentlist" :key="index"
              :good_items="value" class="gooditem" 
              ></goodsitem>
        </div>
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
  .box .gooditem {
      display: flex;
      flex-direction: row;
      width: 48%;
  }
</style>