<template>
<div class='goodswrap'>
  <div class='goodsleft' ref='goodsleft'>
    <ul>
      <li class='goodsclasswrap' v-if='goods' v-for='(item,index) in goods' :key='item.name'>
        <router-link :to='"/goods/"+index'>
          <div class='goodsclass'><div class='goodsclasstitle'>{{item.name}}</div></div>
        </router-link>
      </li>
    </ul>
  </div>
  <div class='goodsright' ref='goodsright'>
    <ul>
      <li class='foodswrap' v-for='goodsitem in goods' :key='goodsitem.name'>
        <div class='goodstitle'>{{goodsitem.name}}</div>
        <div v-for='(foodsitem,foodsIndex) in goodsitem.foods' class='foodsItemWrap' :key='foodsitem.name'>
          <div class='foodsItemImg' :style='"background-image:url("+foodsitem.icon+")"'></div>
          <div class='foodsItemtext'>
            <div class='foodsItemTitle'>{{foodsitem.name}}</div>
            <div v-if='foodsitem.description!=""' class='description'>{{foodsitem.description}}</div>
            <div class='saleRating'>月售{{foodsitem.sellCount}}份 好评率{{foodsitem.rating}}%</div>
            <div class='foodsItemPrice'>￥{{foodsitem.price}}<span v-if='foodsitem.oldPrice!=""' class='oldPrice'>￥{{foodsitem.oldPrice}}</span></div>
          </div>
          <div v-if='foodsIndex+1<goodsitem.foods.length' class='splitLine'></div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  props: {
    goods: {}
  },
  methods: {
    _initScroll () {
      this.scrollleft = new BScroll(this.$refs.goodsleft, {})
      this.scrollright = new BScroll(this.$refs.goodsright, {})
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
    })
  }
}
</script>
<style lang='scss'>
@import '../../common/css/px2rem';
.goodswrap{
  height:100%;
  overflow: hidden;
  display:flex;
  .active{
    display:block;
    position: relative;
    background: #fff;
  }
}
.goodsleft{
  height:100%;
  width:p2r(160);
  overflow:hidden;
}
  .goodsclasswrap{
    background:#f3f5f7;
  }
    .goodsclass{
      width:p2r(112);
      margin:0 auto;
    }
      .goodsclasstitle{
        height:p2r(108);
        line-height:p2r(28);
        display:table-cell;
        vertical-align:middle;
        font: {
          size:p2r(24);
          weight:200;
        }
        color:rgb(77,85,93);
      }
.goodsright{
  height:100%;
  flex:1;
  overflow:hidden;
  display: relative;
}
  .foodswrap{
    display: relative;
  }
    .goodstitle{
      height: p2r(52);
      line-height: p2r(52);
      padding-left: p2r(28);
      background: #f3f5f7;
      position:relative;
      &:after{
        content:' ';
        position: absolute;
        height:400%;
        width:400%;
        border-radius:16px;
        border-left:1px solid #d9dde1;
        left:0;
        top:0px;
        transform:scale(.25, .25);
        transform-origin: 0 0;
      }
      font-size: p2r(24);
      color: rbg(147,153,159);
    }
    .foodsItemWrap{
      margin: {
        top: p2r(36);
        left: p2r(36);
        right: p2r(36);
      }
      display: flex;
      position:relative;
      .splitLine{
        content:' ';
        position: absolute;
        height:200%;
        width:200%;
        border-bottom:1px solid rgba(7,17,27,.1);
        left:0;
        top:0px;
        transform:scale(.5, .5);
        transform-origin: 0 0;
      }
    }
      .foodsItemImg{
        width: p2r(114);
        height: p2r(114);
        margin-right: p2r(20);
      }
      .foodsItemtext{
        margin-top: p2r(4);
      }
        .foodsItemTitle{
          font-size: p2r(28);
          line-height: p2r(28);
          color: rgb(7,17,27);
        }
        .description,.saleRating{
          margin-top: p2r(16);
          color: rgb(147,153,159);
          font-size: p2r(20);
        }
        .foodsItemPrice{
          font-size: p2r(28);
          color: rgb(240,20,20);
          margin: {
            top: p2r(16);
            bottom: p2r(36);
          }

        }
          .oldPrice{
            font-size: p2r(20);
            color: rgb(147,153,159);
            font-weight: 700;
            vertical-align: top;
            margin-left: p2r(16);
            text-decoration:line-through;
          }
</style>
