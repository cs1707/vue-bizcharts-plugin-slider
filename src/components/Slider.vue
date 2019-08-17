<template>
  <div></div>
</template>

<script>
import G2 from '@antv/g2'
import G2Slider from '@antv/g2-plugin-slider'

window.G2 = G2

export default {
  name: 'BizSlider',
  props: {
    width: {
      type: [String, Number]
    },
    height: {
      type: Number
    },
    padding: Array,
    xAxis: {
      type: String,
      required: true
    },
    yAxis: {
      type: String,
      required: true
    },
    data: {
      type: [Array, Object],
      required: true
    },
    start: {
      type: [Number, String]
    },
    end: {
      type: [Number, String]
    },
    fillerStyle: {
      type: Object
    },
    backgroundStyle: {
      type: Object
    },
    scales: {
      type: Object
    },
    textStyle: {
      type: Object
    },
    handleStyle: {
      type: Object
    },
    backgroundChart: {
      type: Object
    }
  },
  watch: {
    width: 'handlePropChange',
    height: 'handlePropChagne',
    padding: 'handlePropChange',
    xAis: 'handlePropChange',
    yAxis: 'handlePropChange',
    // todo deep watch
    data (val, oldVal) {
      // todo shadow equal
      this.silder.changeData(val)
      this.silder.repaint()
    },
    start: 'handlePropChange',
    end: 'handlePropChange',
    fillerStyle: 'handlePropChange',
    backgroundStyle: 'handlePropChange',
    scales: 'handlePropChange',
    textStyle: 'handlePropChange',
    handleStyle: 'handlePropChange',
    backgroundChart: 'handlePropChange'
  },
  mounted () {
    this.createSlider()
  },
  updated () {
    if (!this.needRebuild) {
      return
    }
    this.slider.destroy()
    const slider = this.createSlider()
    slider.render()
    this.needRebuild = false
  },
  methods: {
    createSlider () {
      this.slider = new G2Slider({
        container: this.$el,
        ...this.$props,
        onChange: (...args) => {
          this.$emit('change', ...args)
        }
      })
      return this.slider
    },
    handlePropChange (val, oldVal) {
      // todo shadowEqual
      this.needRebuild = true
    }
  },
  beforeDestroy () {
    this.slider.destroy()
  }
}
</script>
