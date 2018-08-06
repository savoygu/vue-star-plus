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
            <vue-star-plus v-model="active" color="#ff0000" class="i-star__component">
              <span slot="icon" class="i-star__text">{{ active ? '💖' : '❤' }}</span>
            </vue-star-plus>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-1" style="height: 200px;">
          <span class="vd-demo__demonstration">指定默认和激活颜色</span>
          <div class="i-star__wrap">
            {{active2}}
            <vue-star-plus v-model="active2" class="i-star__component" @change="active2?++count:--count">
              <span class="i-star__text" slot="icon"
                :style="{
                  color: (active2 ? 'rgb(247, 186, 42)' : '#bfcbd9'),
                  'font-size': '24px'
                }">{{ active2 ? '💘' : '❤'}} {{count}}</span>
            </vue-star-plus>
          </div>
        </div>
      </template>
      <template slot="explanation">
        可以通过 `v-model` 的值进行设置默认和激活颜色。change 事件可以在改变状态之后进行 `+1` 或 `-1` 操作
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
            <vue-star-plus v-model="active3" class="i-star__component">
              <img class="i-star__picture" slot="icon" :src="require(active3 ? './images/l_rank_star2.png' : './images/l_rank_unstar2.png')">
            </vue-star-plus>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-1" style="height: 200px;">
          <span class="vd-demo__demonstration">切换点赞背景</span>
          <div class="i-star__wrap">
            {{active4}}
            <vue-star-plus v-model="active4" class="i-star__component">
              <span class="i-star__bgc" slot="icon"
                :class="{'is-active': active4}"></span>
            </vue-star-plus>
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
        :highlight="sourcecode3"
        class="i-star__more">
      <template slot="description">
        会用到 font-awesome 和 animate.css 库。
      </template>
      <div class="i-star__operate">
        <span>调整间隔时间：{{duration}}ms</span>
        <button @click="adjustmentSpeed(200)">下调-200ms</button>
        <button @click="adjustmentSpeed(-200)">上调+200ms</button>
      </div>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1" style="height: 200px;" v-for="(item, index) in data" :key="index">
          <span class="vd-demo__demonstration">fa-{{item.font}} 和 {{item.animated}}</span>
          <div class="i-star__wrap">
            {{item.model}}
            <vue-star-plus ref="star" v-model="item.model" class="i-star__component" :animate="'animated ' + item.animated">
              <i slot="icon" class="fa fa-2x"
              :class="'fa-'+item.font"
              :style="{ color: item.model ? item.color : '' }"></i>
            </vue-star-plus>
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

<script>
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
        sourcecode3,
        current: -1,
        last: -1,
        reverse: false,
        duration: 1000,
        interval: null,
        count: 100
      }
    },

    methods: {
      switchActiveStatus () {
        if (!this.reverse){
          this.last = this.current++
          if (this.current === this.data.length - 1) {
            this.reverse = true
          }
        } else {
          this.last = this.current--
          if (this.current === 0) {
            this.reverse = false
          }
        }
        this.data[this.current].model = !this.data[this.current].model
        if (this.last !== -1) {
          this.data[this.last].model = !this.data[this.last].model
        }
      },

      adjustmentSpeed (speed) {
        clearInterval(this.interval)
        this.duration = this.duration - speed
        if (this.duration < 200) {
          this.duration = 200
        } else if (this.duration > 2000) {
          this.duration = 2000
        }
        console.log(this.duration)
        this.interval = setInterval(_ => {
          this.switchActiveStatus()
        }, this.duration)
      }
    },

    mounted () {
      this.interval = setInterval(_ => {
        this.switchActiveStatus()
      }, this.duration)
    }
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
    font-size: 36px;
    user-select: none;
  }

  .i-star__picture {
    display: block;
    width: 36px;
    height: auto;
  }

  .i-star__bgc {
    display: block;
    width: 36px;
    height: 36px;
    background: url("./images/l_rank_unstar2.png") no-repeat;
    background-size: contain;

    &.is-active {
      background-image: url("./images/l_rank_star2.png")
    }
  }

  .i-star__operate {
    padding-bottom: 20px;
    font-size: 16px;
    color: #5e6d82;
    line-height: 1.5em;

    span {
      display: inline-block;
      width: 200px;
    }

    button {
      line-height: 28px;
      color: white;
      background-color: plum;
      border: 1px solid purple;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .i-star__more {
    .vd-demo__block {
      &.vd-demo__block-1 {
        width: 33.3%;
        &:nth-child(2n) {
          border-right: 1px solid #eff2f6;
        }
        &:nth-child(3n) {
          border-right: none;
        }
      }
    }
  }
</style>
