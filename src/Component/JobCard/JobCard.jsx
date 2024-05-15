import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocationDot, faCircleDollarToSlot, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const JobCard = ({ job }) => {
    const {id, job_title, company_name, remote_or_onsite, location, salary, fulltime_or_parttime } = job;
    console.log(job);
    return (
        <div className='border rounded w-[80%] md:w-full mx-auto p-8'>
            <h1 className='text-2xl font-bold '>{job_title}</h1>
            <h4 className='text-lg text-[#757575]'>{company_name}</h4>
            <div className='flex gap-2'>
                <span className='border border-[#9873FF] text-[#9873FF] rounded p-1 text-sm'>{remote_or_onsite}</span>
                <span className='border border-[#9873FF] text-[#9873FF] rounded p-1 text-sm'>{fulltime_or_parttime}</span>
            </div>
            <div className='flex gap-2'>
                <span className='text-[#757575] text-sm'>
                    <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                    {location}</span>
                <span className='text-[#757575] text-sm'>
                    <FontAwesomeIcon icon={faCircleDollarToSlot} className='me-2' />
                    Salary: {salary}</span>

                <div>
                    <Link to={`/${id}`} className={`block px-3 py-2 rounded bg-blue-500 text-white border`}>View details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;