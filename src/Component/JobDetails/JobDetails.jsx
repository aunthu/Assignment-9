import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../Utilities/fakedb';

const JobDetails = () => {
    const job=useLoaderData();
    console.log(job);
    const {job_title, company_name, job_description, educational_requirements, job_responsibility, experience,id}=job;
    const handleAddtoCart=(product_id)=>{
        console.log(product_id);
        addToDb(product_id);
    };
    
    return (
        <div className='max-w-6xl mx-auto'>
        <p className='text-5xl text-center'>{company_name}</p>
        <br />
        <span className='text-4xl'>{job_title}</span>
         <p><h1 className='text-3xl text-bold'>Job Description:</h1> {job_description}</p>
         <p><h2 className='text-bold text-3xl'>Job  Responsibility:</h2> {job_responsibility}</p> 

            <button className='px-3 py-2 rounded bg-blue-500 text-white text-bold' onClick={()=>handleAddtoCart(id)}>Apply Now</button>
        </div>
    );
};

export default JobDetails;