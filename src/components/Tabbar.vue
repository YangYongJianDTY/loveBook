<template>
  <section class="tabbar">
    <router-link :to="{ name: 'shelf' }" class="tab-item" exact>
      <i class="el-icon-tickets"></i>
      <p class="tab-item-label">书架</p>
    </router-link>
    <router-link :to="{ name: 'category' }" class="tab-item" exact>
      <i class="el-icon-menu"></i>
      <p class="tab-item-label">书库</p>
    </router-link>
    <!--<router-link :to="{ name: 'rank' }" class="tab-item" exact>-->
      <!--<i class="el-icon-tickets"></i>-->
      <!--<p class="tab-item-label">类目3</p>-->
    <!--</router-link>-->
    <router-link :to="{ name: 'featured' }" class="tab-item" exact>
      <i class="el-icon-mobile-phone"></i>
      <p class="tab-item-label">推送</p>
    </router-link>

  </section>
</template>

<script>
export default {
  name: 'tababr',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, .1);
  box-sizing: border-box;
  font-size: 16px;
  .tab-item{
    display: block;
    flex: 1;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &.router-link-exact-active {
       color: #5579ee;
     }
  }
  .tab-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 4px;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
  .tab-item-label {
    text-align: center;
    font-size: 14px;
  }
}
</style>
