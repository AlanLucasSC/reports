<template>
  <div>
    <div class="row" :key="reportKey">
      <div v-for="(chart, index) in report.charts" :key="index" :class="`col-lg-${chart.collumn}`">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">{{ chart.title }}</h5>
            <h3 v-if="chart.total" class="card-title"><i class="tim-icons icon-components text-info "></i> {{ getTotal(chart.total, chart.name) }}</h3>
          </template>
          <div class="chart-area">
            <component
              v-if="charts[chart.name]"
              v-bind:is="chart.model"
              style="height: 100%"
              :chart-id="`${chart.model}-${index}`"
              :chart-data="charts[chart.name].chartData"
              :gradient-stops="charts[chart.name].gradientStops"
              :extra-options="charts[chart.name].extraOptions"
            ></component>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
  import BarChart from '@/components/Charts/BarChart';

  import { getReport, getData } from '@/services/reports';
  import { getModel } from '@/services/models';

  export default {
    name: 'dashboard',
    components: {
      'bar-chart': BarChart
    },
    data() {
      return {
        charts: {},
        report: [],
        reportKey: true
      }
    },
    created () {
      getReport('residuos').then(async (response) => {
        this.report = response
        const charts = response.charts
        for (const chart of charts) {
          const model = await getModel(chart.model)
          this.charts[chart.name] = model.model

          const data = await getData(chart.name, chart.model)
          this.charts[chart.name].chartData.labels = data.labels
          this.charts[chart.name].chartData.datasets[0].data = data.data
          this.charts[chart.name].total = data.total
        }
        this.reportKey = !this.reportKey
      })
    },
    methods: {
      getTotal (totalString, key) {
        if (!totalString) {
          return ''
        }

        if (!this.charts[key] || !this.charts[key].total) {
          return ''
        }

        const total = this.charts[key].total
        return totalString.replace('${total}', total)
      }
    }
  };
</script>
<style>
</style>
