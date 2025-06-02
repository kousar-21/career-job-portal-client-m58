import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {

    const jobsPromise = fetch("http://localhost:4000/jobs").then(res=>res.json())

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-spinner text-secondary text-4xl"></span>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;