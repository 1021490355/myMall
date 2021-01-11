<template>
    <div id="app">
      <router-view></router-view>
        <tab-bar>
          <tab-bar-item link="/home">
            <template v-slot:item-icon><img class="item-icon" src="./assets/images/tabbar/home.svg" alt=""></template>
            <template v-slot:item-icon-active><img class="item-icon" src="./assets/images/tabbar/home_active.svg" alt=""></template>
            <template v-slot:item-text><div class="item-text">主页</div></template>
          </tab-bar-item>
          <tab-bar-item  link="/category">
            <template v-slot:item-icon><img class="item-icon" src="./assets/images/tabbar/category.svg" alt=""></template>
            <template v-slot:item-icon-active><img class="item-icon" src="./assets/images/tabbar/category_active.svg" alt=""></template>
            <template v-slot:item-text><div class="item-text">菜单</div></template>
          </tab-bar-item>
          <tab-bar-item link="/cart">
            <template v-slot:item-icon><img class="item-icon" src="./assets/images/tabbar/shopcart.svg" alt=""></template>
            <template v-slot:item-icon-active><img class="item-icon" src="./assets/images/tabbar/shopcart_active.svg" alt=""></template>
            <template v-slot:item-text><div class="item-text">我的</div></template>
          </tab-bar-item>
          <tab-bar-item link="/profile">
            <template v-slot:item-icon><img class="item-icon" src="./assets/images/tabbar/profile.svg" alt=""></template>
            <template v-slot:item-icon-active><img class="item-icon" src="./assets/images/tabbar/profile_active.svg" alt=""></template>
            <template v-slot:item-text><div class="item-text">我的</div></template>
          </tab-bar-item>
        </tab-bar>
    </div>
</template>
<script>
  import TabBar from "components/common/tab-bar/TabBar";
  import TabBarItem from "components/common/tab-bar/TabBarItem";
  export default {
  name: 'App',
  components: {
      TabBar,
      TabBarItem
  }

}
</script>

<style>
@import "assets/css/base.css";
#tab-bar-item img{
  margin-top: 2px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

</style>
