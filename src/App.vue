<template>
  <div id="app">
    <button type="button" @click="test">test</button>
    <Slider
      @change="handleChange"
      :fillerStyle="filler"
      :width="width"
      :height="height"
      xAxis="time"
      yAxis='value'
      :scales="scales"
      :data="originDv"
      :backgroundChart="{type: 'line'}"
    />
  </div>
</template>

<script>
import Slider from './components/Slider'
import DataSet from '@antv/data-set'
import data from './data/rain-flow.json'

const ds = new DataSet({
  state: {
    start: new Date('2009/7/20 0:00').getTime(),
    end: new Date('2009/9/9 0:00').getTime()
  }
})
const originDv = ds.createView('origin')
originDv.source(data)
  .transform({
    type: 'fold',
    fields: [ 'rain', 'flow' ],
    key: 'type',
    value: 'value',
    retains: [ 'rain', 'flow', 'time' ]
  })

export default {
  name: 'app',
  data () {
    return {
      filler: {
        fill: '#BDCCED',
        fillOpacity: 0.3
      },
      scales: {
        time: {
          type: 'time',
          tickCount: 10,
          mask: 'M/DD H:mm'
        }
      },
      originDv,
      height: 25,
      width: 200
    }
  },
  components: {
    Slider
  },
  methods: {
    test () {
      this.height += 5
      this.width += 10
    },
    handleChange (...args) {
      console.log(args)
    }
  }
}
</script>

<style>
</style>
