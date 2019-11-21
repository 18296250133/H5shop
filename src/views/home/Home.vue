<template>
    <div class="box">
        
        <!-- 头部导航栏 -->
    <navbar :bgcolor='backgoundcolors' fontcolor='white' class="nav">
        <div slot="center">购物街</div>
    </navbar>
     
    </div>
</template>

<script>
// 导入scss文件中定义的颜色变量
import {backgoundcolor} from '../../assets/css/index.scss'
export default {
    
    data(){
        return {
            backgoundcolors:backgoundcolor
            
        }
    },
    name:'home',
    components:{
        navbar:()=> import('../../components/content/navbar/navbar')
    },

    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
  
</style>