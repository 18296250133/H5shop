<template>
  <div>
     <tabcontainer>
       <tabitem path="/home" activecolor="pink">
         <img src="../../../assets/img/tabbar/home.svg" slot="item-icon">
          <img src="../../../assets/img/tabbar/home_active.svg" slot="item-icon-active">
         <div slot="item-text">首页</div>
       </tabitem>

       <tabitem path="/catory" activecolor="pink">
         <img src="../../../assets/img/tabbar/category.svg" slot="item-icon">
         <img src="../../../assets/img/tabbar/category_active.svg" slot="item-icon-active">
         <div slot="item-text">分类</div>
       </tabitem>

       <tabitem path="/shopcart" activecolor="pink">
         <img src="../../../assets/img/tabbar/shopcart.svg" slot="item-icon">
         <img src="../../../assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
         <div slot="item-text">购物车</div>
       </tabitem>

       <tabitem path="/profile" activecolor="pink">
         <img src="../../../assets/img/tabbar/profile.svg" slot="item-icon">
         <img src="../../../assets/img/tabbar/profile_active.svg" slot="item-icon-active">
         <div slot="item-text">我的</div>
       </tabitem>

     </tabcontainer>
    
  </div>
</template>

<script>
export default {
     components:{
          tabcontainer:()=>import ('../../common/tabbar/tabcontainer'),
          tabitem:()=>import('../../common/tabbar/tabitem')
     }
}
</script>