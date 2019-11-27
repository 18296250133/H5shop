<template>
    <div class="wrapp" ref="wrapp">
       <div class="content">
           <slot></slot>
       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            bscroll:''
        }
    },
    name:'m-scroll',
    mounted(){
        this.bscroll=new BScroll(this.$refs.wrapp,{
            proType:3,
            pullUpLoad:true
        });

        //监听滚动的位置
        // this.bscroll.on('scroll',(position)=>{
        //    // console.log(position);
        // })

    }
}
</script>

<style lang="scss" scoped>
   
</style>