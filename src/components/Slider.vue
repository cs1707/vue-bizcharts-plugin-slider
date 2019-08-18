<template>
  <div></div>
</template>

<script>
import G2 from '@antv/g2'
import G2Slider from '@antv/g2-plugin-slider'

// G2Slider 坑
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
    height: 'handlePropChange',
    padding: 'handlePropChange',
    xAis: 'handlePropChange',
    yAxis: 'handlePropChange',
    data (val) {
      this.slider.changeData(val)
      this.slider.repaint()
    },
    start: 'handlePropChange',
    end: 'handlePropChange',
    fillerStyle: {
      handler: 'handlePropChange',
      deep: true
    },
    backgroundStyle: {
      handler: 'handlePropChange',
      deep: true
    },
    scales: {
      handler: 'handlePropChange',
      deep: true
    },
    textStyle: {
      handler: 'handlePropChange',
      deep: true
    },
    handleStyle: {
      handler: 'handlePropChange',
      deep: true
    },
    backgroundChart: {
      handler: 'handlePropChange',
      deep: true
    },
    $props: {
      handler () {
        this.$nextTick(() => {
          if (this.needRebuild) {
            this.slider.destroy()
            const slider = this.createSlider()
            slider.render()
            this.needRebuild = false
          }
        })
      },
      deep: true
    }
  },
  mounted () {
    this.createSlider()
    this.slider.render()
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
      if (
        ((typeof val === 'object' || Array.isArray(val)) && val === oldVal) ||
        !G2.Util.isEqual(val, oldVal)
      ) {
        this.needRebuild = true
      }
    }
  },
  beforeDestroy () {
    this.slider.destroy()
  }
}
</script>
