const app=Vue.createApp({
  data() {
    return {
      jobListing:[],
      search:'',
      
    };
  },
  async mounted() {
    const res = await fetch("./data.json");
    const data = await res.json();
    this.jobListing = data;
  },
  computed:{
       filterJobs(){
            return this.jobListing.filter((job) =>{
        
              return job.role.match(this.search) || job.level.match(this.search) || job.company.match(this.search)
              || job.location.match(this.search)
           
            })
          }
        },
      methods:{
          clear(){
                this.search=''
                  }
   }
  
});
app.mount("#app");
