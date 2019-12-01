<template>
    <navbar>
        <div slot="left" class="navitemleft">
            <img src="../../../assets/img/common/back.svg"/>
        </div>

        <div slot="center" class="navitem">
             <div v-for="(item,index) in navitem" :key="index" 
             :class="{'active':currectIndex==index}"
             @click="isactive(index)">
                 {{item}}
             </div>
        </div>
    </navbar>
</template>

<script>
export default {
    name:'detailnav',
    data(){
          return {
              navitem:['商品','参数','评论','推荐'],
              currectIndex:0
          }
    },
    methods:{
        //点击顶部导航按 是否处于活跃状态
            isactive(index){
                this.currectIndex=index
            }
    },
    components:{
         navbar:()=> import ('../../../components/content/navbar/navbar')
         

    }
}
</script>

<style lang="scss" scoped>
   .navitem {
      display: flex;
  }

  .navitem div {
      flex: 1;
  }

  .active {
      color: #ff5777
  }

  .navitemleft {
      
      text-align: left;
      
  }
  .navitemleft img {
      vertical-align: middle;
      padding-left: px(17);
  }
</style>
