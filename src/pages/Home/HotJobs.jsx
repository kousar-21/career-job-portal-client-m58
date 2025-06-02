import React, { use } from 'react';
import JobsCard from '../Shared/JobsCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    return (
        <div>
            <h1 className='text-4xl text-sky-600 font-bold py-10 text-center'>Hot Jobs Of The Day</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;