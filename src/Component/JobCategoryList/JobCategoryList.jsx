import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategoryList = () => {
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategoryList(data))
    }, [])
    return (
        <div className='space-y-4 mb-3'>
            <h1 className='text-4xl font-bold text-center'>Job Category List</h1>
            <p className='text-gray-400 leading-7 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid gap-5 grid-cols-4'>
                {categoryList.map(category => <JobCategory key={category.id} category={category}></JobCategory>)}

            </div>
        </div>
    );
};

export default JobCategoryList;