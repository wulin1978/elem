<template>
<div>
  <div class='header'>
    <div class='headerleft'>
      <div class='logo'></div>
    </div>
    <div class='headerright'>
      <div class='brandWrap'><span class='brand'>{{seller.name}}</span></div>
      <div class='description'>{{seller.description}}</div>
      <div class='supportsWrap'>
        <span class='supports' v-if='seller.supports'>
          <span class='supportsIcon' :class='supports[seller.supports[supportsIndex].type]'></span>{{seller.supports[supportsIndex].description}}</span>
      </div>
      <span class='supportsNum'><span v-if='seller.supports' class='supportsCount'>{{seller.supports.length}}个</span><span class='icon-keyboard_arrow_right'></span></span>
    </div>
    <div class='bulletin'><span class='bulletinIcon'></span>{{seller.bulletin}}</div><div class='icon-keyboard_arrow_right bulletinMore'></div>
    <div class='headerbg'></div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    seller: {}
  },
  data () {
    return {
      supports: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      supportsIndex: 4
    }
  }
}
</script>
<style lang='scss'>
@import '../../common/css/icon';
@import '../../common/css/px2rem';
@import '../../common/css/bg4dpr';

.headerbg{
  height:100%;
  width:100%;
  top:0px;
  left:0px;
  position: absolute;
  z-index: -1;
  background:{
    image:url(./seller_avatar_256px.jpg);
    size: cover;
  }
  filter:blur(10px);
}
.header{
  height: p2r(268);
  position: relative;
  background:rgba(7, 17 ,27, 0.5);
  display: flex;
  .headerleft{
    width: p2r(208);
    .logo{
      height: p2r(128);
      width: p2r(128);
      border-radius:5px;
      margin:{
        left: p2r(48);
        top: p2r(48);
      }
      background: {
        image: url(seller_avatar_256px.jpg);
        size: cover;
      }
    }
  }
  .headerright {
    flex:1;
    .brandWrap {
      margin-top: p2r(52);
      color: white;
      padding-left: p2r(72);
      @include bg4dpr('brand');
      background: {
        repeat: no-repeat;
        size: p2r(60);
      }
      font: {
        size: p2r(32);
        weight: bold;
      }
      line-height: p2r(36);
    }
    .description {
      margin-top: p2r(16);
      font-size: p2r(24);
      color: white;
      font-weight: 200;
      line-height: p2r(24);
    }
    .supportsWrap {
      margin-top: p2r(20);
      .supports {
        font: {
          size: p2r(24);
          weight: 200;
        }
        line-height: p2r(24);
        color: white;
        .supportsIcon{
          display: inline-block;
          height: p2r(24);
          width: p2r(24);
          vertical-align: bottom;
          margin-right: p2r(8);
          background: {
            repeat: no-repeat;
            size: p2r(24);
          }
        }
        .decrease{
          @include bg4dpr('decrease_1');
        }
        .discount{
          @include bg4dpr('discount_1');
        }
        .guarantee{
          @include bg4dpr('guarantee_1');
        }
        .invoice{
          @include bg4dpr('invoice_1');
        }
        .special{
          @include bg4dpr('special_1');
        }
      }
    }
    .supportsNum {
      position: absolute;
      right: p2r(24);
      bottom: p2r(84);
      border-radius: p2r(28);
      padding: p2r(14) p2r(16);
      background: rgba(0,0,0,.2);
      color: white;
      .supportsCount{
        margin-right: p2r(4);
        vertical-ailgn: bottom;
      }
    }
  }
  .bulletin{
    height: p2r(56);
    line-height: p2r(56);
    width:100%;
    box-sizing: border-box;
    padding:0 p2r(44) 0 p2r(24);
    background: rgba(7,17,27,.2);
    position: absolute;
    bottom: 0;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .bulletinIcon{
      vertical-align:middle;
      margin-right: p2r(8);
      @include bg4dpr('bulletin');
      display: inline-block;
      width: p2r(44);
      height: p2r(24);
      background:{
        size: p2r(44);
        repeat: no-repeat;
      }
    }
  }
  .bulletinMore{
    position: absolute;
    bottom: 0px;
    right: p2r(24);
    line-height: p2r(56);
    color: white;
  }
}
</style>
