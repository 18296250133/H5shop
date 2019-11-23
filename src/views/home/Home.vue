<template>
    <div id="box">
        
   <!-- 头部导航栏 -->
    <navbar :bgcolor='backgoundcolors' fontcolor='white' class="nav">
        <div slot="center">购物街</div>
    </navbar>

    <!-- 轮播图 -->
   <swipe :banner="banner"></swipe>
    
    <!-- 每日推荐 -->
    <recommend :recommend="recommend"/>

     <!-- 本周流行 -->
      <div class="prevalent">
          <img src="../../assets/img/home/recommend_bg.jpg"/>
      </div>
    
    <!-- 分类数据 -->
    <control :list_category="list_category"/>


    </div>
</template>

<script>
// 导入scss文件中定义的颜色变量
import {backgoundcolor} from '../../assets/css/index.scss'
 import {getmultidata} from '../../network/home.js'


export default {
    
    data(){
        return {
            backgoundcolors:backgoundcolor, //tabar选中后颜色
            banner:[], //轮播图
            recommend:[],//每日推荐
            list_category:['流行','热销','上新'] //首页分类流行
            
        }
    },
    name:'home',
    components:{
        navbar:()=> import('../../components/content/navbar/navbar'),
        swipe:()=> import('./childcomponents/swipe.vue'),
        recommend:()=>import('./childcomponents/recommend.vue'),
        control:()=>import('../../components/content/control/control.vue')
    },

    methods:{
       
    },
     created() {
            
            getmultidata().then(res=>{
                this.banner=res.data.data.banner.list;
               console.log(res.data);
                this.recommend=res.data.data.recommend.list
               
            }).catch(err=>{
                console.log(err);
            })


            
        }
}
</script>

<style  scoped lang="scss">

#box {
    height: 100%;
    width: 100%;
    margin-bottom: px(90)
}
 .prevalent {
     width: 100%;
     height: px(260);
 }
 .prevalent img {
      width: 100%;
      height: 100%;
 }
  
</style>