const app = Vue.createApp({
  data() {
    return {
      jobListing: [],
      search: ""
    };
  },
  async mounted() {
    const res = await fetch("./data.json");
    const data = await res.json();
    this.jobListing = data;
   
  },
  computed: {
    filterJobs() {
      return this.jobListing.filter((job) => {
        return job.role.toLowerCase().match(this.search.toLowerCase()) ||
          job.level.toLowerCase().match(this.search.toLowerCase()) ||
          job.company.toLowerCase().match(this.search.toLowerCase()) ||
          job.location.toLowerCase().match(this.search.toLowerCase()) 
      
      });
    },
  },
  methods: {
    clear() {
      this.search = "";
    }
  },
//   watch: {
//     'search' :function (job) {
//         this.search = job.toLowerCase()
//     } 
// }
});
app.mount('#app');
