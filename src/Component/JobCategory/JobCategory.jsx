import React from 'react';

const JobCategory = ({ category }) => {
    // console.log(category);
    const{category_logo, category_name, jobs_available}=category;
    return (
        <div className='rounded bg-purple-100 p-4 space-y-2'>
            <img src={category_logo} alt="" className='mb-3' />
            <span className='text-2xl font-bold'>{category_name}</span>
            <p className='text-gray-400'>{jobs_available} jobs available</p>
        </div>
    );
};

export default JobCategory;