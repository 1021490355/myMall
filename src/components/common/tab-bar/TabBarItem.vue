<template>
  <div id="tab-bar-item" @click="itemclick">
<!--    具名插槽-->
    <div v-if="isActivie"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            isActivie:true
          }
        },
        name: "TabBarItem",
      props:{
        link:String
      },
      methods:{
          itemclick(){
            console.log(this.link)
            this.$router.push({path:this.link})
          }
      }
    }
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;
    /*    水平布局*/
    text-align: center;
    height: 49px;
    font-size: 14px;

  }

</style>
