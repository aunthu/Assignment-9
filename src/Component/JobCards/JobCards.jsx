import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from '../JobCard/JobCard';

const JobCards = () => {
    const [isOpen, setIsOpen] = useState(true)
    // const [jobs, setJobs] = useState([]);
    let allJobs = useLoaderData();
    // console.log(allJobs);
    // useEffect(() => {
    //     setJobs(allJobs);
    // }, [])
    // if (allJobs.length < 5) {

    // }
    const slicedJob = allJobs.slice(0, 4);
    const slicedJobMap = slicedJob.map(job => <JobCard key={job.id} job={job}></JobCard>)
    const allJobsMap = allJobs.map(job => <JobCard key={job.id} job={job}></JobCard>)
    // console.log(slicedJob);
    return (
        <section className=' border'>
            <h2 className='text-2xl text-center font-bold'>Featured Jobs</h2>
            <p className='text-slate-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid gap-2 md:grid-cols-2 mb-10  border border-red-400'>
                {
                    isOpen === true ? slicedJobMap : allJobsMap
                }
                <button onClick={() => setIsOpen(!isOpen)} className={`px-3 py-2 rounded bg-blue-500 text-white mx-auto border`}>{isOpen ? 'See More' : 'See Less'}</button>
            </div>
        </section>
    );
};

export default JobCards;    