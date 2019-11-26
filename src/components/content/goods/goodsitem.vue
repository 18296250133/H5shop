<template>
    <div class="box">
        <div class="item-img">
        <img :src="good_items.show.img"/>
        </div>
        <div class="info">
            <div class="title">{{good_items.title}}</div>
             <div>
                 <span>{{good_items.price}}</span>
                 <span>{{good_items.cfav}}</span>
             </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'goodsitem',
    props:{
        good_items:{
            type:Object,
            defaule(){
                return '222'
            }
        }
    },
    created(){
        console.log(11)
        //console.log('good_items:',this.good_items);
    }
}
</script>

<style lang="scss" scoped>
.info .title {
    width: 180px; 
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

}

.item-img {
   width: 100%;
}
 .box {
     display: flex;
     flex-direction: column;
 }
    .box img {
        
        height: px(240);
    }
</style>