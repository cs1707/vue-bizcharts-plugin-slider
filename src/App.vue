<template>
  <div id="app">
    <Slider
      :fillerStyle="filler"
      width="auto"
      :height="26"
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
      originDv
    }
  },
  components: {
    Slider
  }
}
</script>

<style>
</style>
