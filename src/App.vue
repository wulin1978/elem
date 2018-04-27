<template>
<div>
  <vheader :seller='seller'></vheader>
  <vmenu></vmenu>
  <router-view :goods='goods'></router-view>
</div>
</template>
<script>
import header from './components/header/header.vue'
import menu from './components/menu/menu.vue'

export default {
  data () {
    return {
      seller: {},
      goods: {}
    }
  },
  components: {
    vheader: header,
    vmenu: menu
  },
  created () {
    this.$axios.get('http://localhost:8080/static/data.json').then((response) => {
      this.seller = response.data.seller
      this.goods = response.data.goods
    })
  }
}
</script>
<style>
</style>
