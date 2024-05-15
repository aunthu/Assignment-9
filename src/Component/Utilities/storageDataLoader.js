import { getShoppingCart } from "./fakedb";

const storageDataLoader= async()=>{
    const response = await fetch('jobs.json')
    const allJobs = await response.json();
    const savedJob=getShoppingCart();
    let newJobStore=[];
    if(savedJob){
        for(const id in savedJob){
            const existingJob=allJobs.find(job=>job.id===id);
            if(existingJob){
                newJobStore.push(existingJob);
            }
        }
    }
    return [newJobStore, allJobs];
}

export default storageDataLoader;