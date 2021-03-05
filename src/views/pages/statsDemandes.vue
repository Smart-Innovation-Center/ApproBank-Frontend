<script>
import { mapState } from "vuex";
import { Bar, mixins } from 'vue-chartjs'
import axios from '../../axios'

  export default {
    name: "statsDemandes",
    extends: Bar,
    mixins: [mixins.reactiveData],
    data () {
      return {
        chartData : null,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    methods: {
    },
    computed: {
    ...mapState({
      suppliesForStats: state => state.supply.suppliesForStats,
    }),
  },
  created() {
    axios.get(`supplyThisYear`)
      .then(response => {
        const responseData = response.data
        this.chartData = {
          labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          datasets: [
            {
            label: 'Toutes les demandes',
             backgroundColor: '#1285b5',
              pointBackgroundColor: 'white',
              borderWidth: 1,
             data: responseData[0]
            },
            {
              label: 'Demandes validées',
              backgroundColor: '#00c466',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              data: responseData[1]
            },
            {
              label: 'Demandes rejetées',
              backgroundColor: '#e90a0e',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: responseData[2]
            },
          ]
        }
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
  ,
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>