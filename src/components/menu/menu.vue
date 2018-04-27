<template>
<div class='menuWrap'>
  <span class='menuItem'><router-link to='/goods'>商品</router-link></span>
  <span class='menuItem'><router-link to='/comment'><span>评论</span></router-link></span>
  <span class='menuItem'><router-link to='/business'>商家</router-link></span>
</div>
</template>
<script>
export default {
  data () {
    return {
      active: {
        type: Number,
        value: 0
      }
    }
  }
}
</script>
<style lang='scss'>
@import '../../common/css/px2rem';
@import '../../common/css/bottom1px';

.menuWrap{
  height: p2r(80);
  display: flex;
  background: #fff;
  @include bottom1px(#000)
  .menuItem{
    line-height: p2r(80);
    display: block;
    text-align: center;
    font-size: p2r(28);
    color: rgb(77, 85, 93);
    flex: 1;
  }
  .active{
    color: rgb(240, 20, 20)
  }
}
</style>
