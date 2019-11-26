<template>
    <div class="wrapper" ref="wrapp">
         <div class="content">
            <ul>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li><li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li><li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li><li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li><li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li><li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li><li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li>
               <li>1</li><li>1</li>
               <li>1</li>
               <li>1</li>


            </ul>
         </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:"Category",
    data(){
        return {
            bscroll:''
        }
    },
    //probeType 属性  1 、0 都不侦测滚动的位置
    // 2 ：在手指滚动过程中侦测位置，离开后惯性滚 不侦测
    //3.只要是滚动就侦测位置
    mounted(){
       this.bscroll= new BScroll (this.$refs.wrapp,{
         probeType:3,
         pullUpLoad:true
        });

        //监听滚动位置
        this.bscroll.on('scroll',(position)=>{
            console.log(position);
        });
         //监听上拉加载更多
        this.bscroll.on('pullingUp',()=>{
            console.log('上拉加载更多');
            setTimeout(() => {
                this.bscroll.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
            }, 3000);
        })
    }
}
</script>

<style lang="scss" scoped>
   .wrapper {
       height: px(100);
       background-color: pink;
       overflow: hidden;
   }
</style>