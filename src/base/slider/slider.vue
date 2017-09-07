<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>

      </slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, i) in dots" :class="{active: currentPageIndex == i}"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {addClass} from 'common/js/dom'
  export default {
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth()
        this._initDots()
        this._initSlider()
        if (this.autoplay) {
          this._play()
        }
      }, 20)
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
        this.slider.refresh()
      })
    },
    methods: {
      _setSliderWidth(resize) {
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        this.children = this.$refs.sliderGroup.children
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        if (this.loop && !resize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initDots() {
        for (let i = 0; i < this.children.length; i++) {
          this.dots.push(i)
        }
//        this.dots = new Array(this.children.length)
//        this.dots.length = this.children.length
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400
        })
        let self = this
        this.slider.on('scrollEnd', () => {
          let pageIndex = self.slider.getCurrentPage().pageX
          if (self.loop) {
            pageIndex -= 1
          }
          self.currentPageIndex = pageIndex
          if (this.autoplay) {
            clearTimeout(this.timer)
            this._play()
          }
        })
      },
      _play() {
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        let self = this
        this.timer = setTimeout(() => {
          self.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      }
    },
    distroyed() {
      clearTimeout(this.timer)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height : 1px
    .slider-group
      position : relative
      overflow : hidden
      white-space : nowrap
      .slider-item
        float : left
        box-sizing : border-box
        overflow : hidden
        text-align : center
        a
          display : block
          width : 100%
          overflow : hidden
          text-decoration: none
        img
          display : block
          width : 100%
    .dots
      position : absolute
      right : 0
      left : 0
      bottom : 12px
      text-align : center
      font-size : 0
      .dot
        display : inline-block
        margin : 0 4px
        width : 8px
        height :8px
        border-radius : 50%
        background : $color-text-l
        &.active
          width : 20px
          border-radius : 5px
          background : $color-text-ll
</style>
