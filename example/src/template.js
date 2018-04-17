export const sourcecode = `<template>
  <div class="vd-demo__block vd-demo__block-1" style="height: 200px;">
  <span class="vd-demo__demonstration">指定激活颜色</span>
  <div class="i-star__wrap">
    {{active}}
    <vue-star-plus v-model="active" color="#ff0000" class="i-star__component">
      <span slot="icon" class="i-star__text">❤</span>
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
        }">❤ {{count}}</span>
    </vue-star-plus>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: false,
        active2: true
      }
    }
  }
</script>

<style>
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
</style>`

export const sourcecode2 = `<template>
<div class="vd-demo__block vd-demo__block-1" style="height: 200px;">
  <span class="vd-demo__demonstration">切换点赞图片</span>
  <div class="i-star__wrap">
    {{active3}}
    <vue-star-plus v-model="active3" color="#ff0000" class="i-star__component">
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

<script>
  export default {
    data () {
      return {
        active3: false,
        active4: false
      }
    }
  }
</script>

<style>
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
</style>`

export const sourcecode3 = `<template>
<div class="vd-demo__block vd-demo__block-1" style="height: 200px;" v-for="(item, index) in data">
  <span class="vd-demo__demonstration">fa-{{item.font}} 和 {{item.animated}}</span>
  <div class="i-star__wrap">
    {{item.model}}
    <vue-star-plus v-model="item.model" :color="item.color" class="i-star__component" :animate="'animated ' + item.animated">
      <i slot="icon" class="fa fa-2x" :class="'fa-'+item.font"></i>
    </vue-star-plus>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
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
        ]
        current: -1,
        last: -1,
        reverse: false,
        duration: 1000,
        interval: null,
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
</script>`