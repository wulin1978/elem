<template>
<div class='wrap'>
  <vheader :seller='seller' ref='head'></vheader>
  <vmenu></vmenu>
  <div class='main'>
    <router-view :goods='goods'></router-view>
  </div>
  <vfoot></vfoot>
</div>
</template>
<script>
import header from './components/header/header.vue'
import menu from './components/menu/menu.vue'
import footer from './components/footer/footer.vue'

export default {
  data () {
    return {
      seller: {},
      goods: {},
      test: 'fff'
    }
  },
  components: {
    vheader: header,
    vmenu: menu,
    vfoot: footer
  },
  created () {
    this.$axios.get('../static/data.json').then((response) => {
      this.seller = response.data.seller
      this.goods = response.data.goods
    })
  }
}
</script>
<style lang='scss'>
@import './common/css/px2rem';

body{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  overflow: hidden;
}
.wrap{
  height: 100%;
}
.main {
  overflow: hidden;
  position: absolute;
  top: p2r(348);
  bottom: p2r(116);
}
</style>
