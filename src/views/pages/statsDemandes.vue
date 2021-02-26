<script>
import { mapState } from "vuex";
import { Bar } from 'vue-chartjs'

  export default {
    name: "statsDemandes",
    extends: Bar,
    data () {
      return {
        datacollection: {
          labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          datasets: [
            {
              label: 'Toutes les demandes',
              backgroundColor: '#1285b5',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              data: [60, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              label: 'Demandes validées',
              backgroundColor: '#00c466',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              data: [40, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              label: 'Demandes rejetées',
              backgroundColor: '#e90a0e',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [20, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
          ]
        },
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
      load(){
        this.datacollection.datasets[0].data = this.suppliesForStats
        //console.log(this.suppliesForStats)
      }
    },
    computed: {
    ...mapState({
      suppliesForStats: state => state.supply.suppliesForStats,
    }),
  },
  created(){
    this.load();
  }
  ,
    mounted () {
      this.load();
      this.$store.dispatch("supply/loadSuppliesForStats");
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>