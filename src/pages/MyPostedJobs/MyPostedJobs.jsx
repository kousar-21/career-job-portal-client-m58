import React, { Suspense } from 'react';
import useAuth from '../../CustomHook/useAuth';
import MyJobsList from './MyJobsList';
import { createdJobByPromise } from '../../Api/JobsAPI';

const MyPostedJobs = () => {

    const {user} = useAuth();

    return (
        <div>
            <h1 className="text-3xl text-blue-600 py-5">My Posted Jobs: </h1>
            <Suspense>
                <MyJobsList createdJobByPromise={createdJobByPromise(user.email)}></MyJobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;