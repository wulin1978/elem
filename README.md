
# vue 学习踩坑系列：sf

  1、Vue 2.2.0+的版本里，当在组件中使用v-for时，key是必须设置的，否则会报 Elements in iteration expect to have 'v-bind:key' directives.   错误。

  比如 components/goods/goods.vue 中 “\<li class='foodswrap' v-for='goodsitem in goods'\>” 在编辑器就会提示有错（浏览器不会报错），必须加 上 “:key='goodsitem.name'”，即改为 “\<li class='foodswrap' v-for='goodsitem in goods' :key='goodsitem.name'\>”。

  ---
  注：:key='goodsitem.name' 中的 goodsitem.name 须为 String 或 Number，不能是对象或数组。