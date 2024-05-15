import React from 'react';
import HeroPage from '../HeroPage/HeroPage';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

import JobDetails from '../JobDetails/JobDetails';
import JobCards from '../JobCards/JobCards';

const Home = () => {
    
    return (
        <div className='max-w-6xl mx-auto'>
           
            {/* <img src='../images/P3OLGJ1 copy 1.jpg' alt="there was an img" /> */}
            <HeroPage></HeroPage>
            <JobCategoryList></JobCategoryList>
            <JobCards></JobCards>
        </div>
    );
};

export default Home;