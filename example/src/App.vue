<template>
  <div id="app">
    <demonstration
      tag="h2"
      title="Star点赞 组件"
      :show-content="false">
    </demonstration>
    <demonstration
        title="基础示例"
        anchor="demo-code-title"
        :multiple="true"
        :highlight="sourcecode">
      <template slot="description">
        简单描述一下示例代码标题
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1" style="height: 200px;">
          <span class="vd-demo__demonstration">指定激活颜色</span>
          <div class="i-star__wrap">
            {{active}}
            <i-vue-star v-model="active" color="#ff0000" class="i-star__component">
              <span slot="icon" class="i-star__text">❤</span>
            </i-vue-star>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-1" style="height: 200px;">
          <span class="vd-demo__demonstration">指定默认和激活颜色</span>
          <div class="i-star__wrap">
            {{active2}}
            <i-vue-star v-model="active2" class="i-star__component">
              <span class="i-star__text" slot="icon"
                :style="{
                  color: (active2 ? 'rgb(247, 186, 42)' : '#bfcbd9')
                }">❤</span>
            </i-vue-star>
          </div>
        </div>
      </template>
      <template slot="explanation">
        可以通过 `v-model` 的值进行设置默认和激活颜色。
      </template>
    </demonstration>
    <demonstration
        title="图片"
        anchor="demo-code-title"
        :multiple="true"
        :highlight="sourcecode2">
      <template slot="description">
        我们可能会用到图片作为点赞图标——一个是激活的，一个是默认的。
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1" style="height: 200px;">
          <span class="vd-demo__demonstration">切换点赞图片</span>
          <div class="i-star__wrap">
            {{active3}}
            <i-vue-star v-model="active3" class="i-star__component">
              <img class="i-star__picture" slot="icon" :src="require(active3 ? './images/l_rank_star2.png' : './images/l_rank_unstar2.png')">
            </i-vue-star>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-1" style="height: 200px;">
          <span class="vd-demo__demonstration">切换点赞背景</span>
          <div class="i-star__wrap">
            {{active4}}
            <i-vue-star v-model="active4" class="i-star__component">
              <span class="i-star__bgc" slot="icon"
                :class="{'is-active': active4}"></span>
            </i-vue-star>
          </div>
        </div>
      </template>
      <template slot="explanation">
        主要是通过 active 来进行图片和样式的切换。
      </template>
    </demonstration>
    <demonstration
        title="更多示例"
        anchor="demo-code-title"
        :multiple="true"
        :highlight="sourcecode3">
      <template slot="description">
        会用到 font-awesome 和 animate.css 库。
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1" style="height: 200px;" v-for="(item, index) in data">
          <span class="vd-demo__demonstration">fa-{{item.font}} 和 {{item.animated}}</span>
          <div class="i-star__wrap">
            {{item.model}}
            <i-vue-star v-model="item.model" :color="item.color" class="i-star__component" :animate="'animated ' + item.animated">
              <i slot="icon" class="fa fa-2x" :class="'fa-'+item.font"></i>
            </i-vue-star>
          </div>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </demonstration>
    <demonstration
      :show-content="false">
      <p>示例使用详情请参考：（<a href="https://github.com/savoygu/vue-demonstration">https://github.com/savoygu/vue-demonstration</a>）</p>
    </demonstration>
  </div>
</template>

<script type="es6">
  import { sourcecode, sourcecode2, sourcecode3 } from './template'

  export default {
    data () {
      return {
        active: false,
        active2: true,
        active3: false,
        active4: false,
        data: [
          {
            animated: 'tada',
            font: 'bell',
            color: 'rgb(215, 139, 255)',
            model: false
          },
          {
            animated: 'zoomInDown',
            font: 'heart',
            color: 'rgb(240, 86, 84)',
            model: false
          },
          {
            animated: 'rubberBand',
            font: 'bomb',
            color: 'rgb(125, 94, 63)',
            model: false
          },
          {
            animated: 'swing',
            font: 'wrench',
            color: 'rgb(50, 50, 50)',
            model: false
          },
          {
            animated: 'rotateIn',
            font: 'thumbs-up',
            color: 'rgb(152, 138, 222)',
            model: false
          },
          {
            animated: 'wobble',
            font: 'weixin',
            color: 'rgb(254, 163, 134)',
            model: false
          },
          {
            animated: 'rollIn',
            font: 'apple',
            color: 'rgb(253, 145, 145)',
            model: false
          },
          {
            animated: 'bounceInUp',
            font: 'android',
            color: 'rgb(42, 175, 116)',
            model: false
          },
          {
            animated: 'jello',
            font: 'linux',
            color: 'rgb(125, 94, 63)',
            model: false
          }
        ],
        sourcecode,
        sourcecode2,
        sourcecode3
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
    color: #ccc;
  }
  .i-star__wrap {
    position: relative;
  }

  .i-star__component {
    left: 50%; 
    margin-left: -50px;
  }

  .i-star__text {
    font-size: 50px;
    user-select: none;
  }

  .i-star__picture {
    display: block;
    width: 50px;
    height: auto;
  }

  .i-star__bgc {
    display: block;
    width: 50px;
    height: 50px;
    background: url("./images/l_rank_unstar2.png") no-repeat;
    background-size: contain;

    &.is-active {
      background-image: url("./images/l_rank_star2.png")
    }
  }
</style>
