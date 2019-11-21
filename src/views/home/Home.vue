<template>
    <div class="box">
        
        <!-- 头部导航栏 -->
    <navbar :bgcolor='backgoundcolors' fontcolor='white' class="nav">
        <div slot="center">购物街</div>
    </navbar>

    <!-- 轮播图 -->
     <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(site,index) in banner" :key="index" >
        <img :src="site.image"/>
      </mt-swipe-item>
      
</mt-swipe>
    </div>
</template>

<script>
// 导入scss文件中定义的颜色变量
import {backgoundcolor} from '../../assets/css/index.scss'
 import {getmultidata} from '../../network/home.js'


export default {
    
    data(){
        return {
            backgoundcolors:backgoundcolor,
            banner:[]
            
        }
    },
    name:'home',
    components:{
        navbar:()=> import('../../components/content/navbar/navbar')
    },

    methods:{
       
    },
     created() {
            
            getmultidata().then(res=>{
                this.banner=res.data.data.banner.list;
                console.log(res.data.data.banner.list)
                console.log(this.banner[0].image);
            }).catch(err=>{
                console.log(err);
            })


            
        }
}
</script>

<style lang="scss" scoped>
   img {
   width: 100%;
 }
 .mint-swipe {
 height: 218px;
 }
 .mint-swipe-indicators {
     bottom: px(54);
 }
</style>