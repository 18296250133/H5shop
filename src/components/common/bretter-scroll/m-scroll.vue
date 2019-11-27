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
    props:{
         ispro:{
             type:Number,
             default(){
                 return 1
             }
         }
    },

    methods:{
        srrollto(){
            this.bscroll.on('scroll',(position)=>{
                console.log(position)
            })
        }
    },
    mounted(){
        this.bscroll=new BScroll(this.$refs.wrapp,{
            proType:this.ispro,
            pullUpLoad:true,
            click:true
        });

        this.bscroll.on('scroll',(position)=>{
                //console.log(position);
                //发出检听到的事件，然后传递出去
                this.$emit('checkposition',position);
            })
        }

        //监听滚动的位置
        // this.bscroll.on('scroll',(position)=>{
        //    // console.log(position);
        // })

    
}
</script>

<style lang="scss" scoped>
   
</style>