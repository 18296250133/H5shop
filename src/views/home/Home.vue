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
    <control :list_category="list_category" @getindex="getindex"/>


          <!-- <div v-for="(item,index) in goods[currentVaule].list" :key="index">
              {{currentVaule}}
              <span>{{item.title}}</span>
          </div> -->

          <goodscontainer :goodcurrentlist="goods[currentVaule].list"/>

    </div>
</template>

<script>
// 导入scss文件中定义的颜色变量
import {backgoundcolor} from '../../assets/css/index.scss'
 import {getmultidata,getcategory} from '../../network/home.js'


export default {
    
    data(){
        return {
            backgoundcolors:backgoundcolor, //tabar选中后颜色
            banner:[], //轮播图
            recommend:[],//每日推荐
            list_category:['流行','热销','上新'], //首页分类流行
            goods:{
                'pop':{page:1,list:[]},
                'new':{page:1,list:[]},
                'sell':{page:1,list:[]},
            },
            currentVaule:'pop'
            
        }
    },
    name:'home',
    components:{
        navbar:()=> import('../../components/content/navbar/navbar'),
        swipe:()=> import('./childcomponents/swipe.vue'),
        recommend:()=>import('./childcomponents/recommend.vue'),
        control:()=>import('../../components/content/control/control.vue'),
        goodscontainer:()=>import('../../components/content/goods/goodscontainer')
    },

    methods:{
        //获取当前被选中的值
        getindex(index){
            
             switch(index){
                 case 0:
                     this.currentVaule='pop';
                     break;
                 case 1:
                     this.currentVaule='new';
                     break;
                 case 2:
                     this.currentVaule='sell';
                     break;
             }
             console.log('currentVaule:',this.currentVaule);
              
        },


    //获取首页分类数据
        gethomecategory(cata){
            console.log(111);
            let page=this.goods[cata].page;
            let list =this.goods[cata].list
        
            console.log('page',page);
           
           
            getcategory(cata,page).then(res=>{
               
                list.push(...res.data.data.list);
        
                this.goods[cata].list=list;
                this.goods[cata].page= ++page;
            })
           
         
        }  
    },
     created() {
            //获取banner recommend 数据
            getmultidata().then(res=>{
                this.banner=res.data.data.banner.list;
            //    console.log(res.data);
                this.recommend=res.data.data.recommend.list
               
            }).catch(err=>{
                console.log(err);
            })

            //获取首页分类数据
            this.gethomecategory('pop');
            this.gethomecategory('new');
            this.gethomecategory('sell');

            
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