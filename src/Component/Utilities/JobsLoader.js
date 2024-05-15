const Jobdetails= async (id)=>{
    const response= await fetch ('jobs.json')
    const allJobs= await response.json();


    let newjob;
    for (const job of allJobs) {
        
        if(job.id==id){
            newjob=job;
            return newjob;
        }
    }
}
export default Jobdetails;