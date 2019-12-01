<template>
    <div>
        <!-- 导航栏 -->
        <detailnav></detailnav>
     
    </div>
</template>

<script>
import{getdetailById,Goods} from '../../network/detail'

export default {
    name:'detaile',
    data(){
        return{
            iid:'', //商品iid
            goodsObj:{}
        }
    },
    components:{
          detailnav:()=>import('./detailcomponents/detailnav')
    },
    created(){
        //保存iid
        this.iid=this.$route.params.iid;
        //请求detail数据
        getdetailById(this.iid).then(res=>{
            console.log(res.data.result);
            const data=res.data.result;
            this.goodsObj=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style lang="scss" scoped>

</style>