  <template>
  <div>
      <mt-swipe :auto="0">
      <mt-swipe-item v-for="(site,index) in banner" :key="index" >
        <img :src="site.image"/>
      </mt-swipe-item>
      </mt-swipe>
  </div>
  </template>


<script>
export default {
    name:'swipe',
    props:{
        banner:{
            type:Array,
            defauly:[]
        }
    }
}
</script>

<style lang="scss" scoped>
 img {
   width: 100%;
  
 }

 .mint-swipe { 
    height: px(170);
 }

//  .mint-swipe ::v-deep .mint-swipe-indicators{
//        bottom: px(20);
//    }
</style>
  
  
  
  