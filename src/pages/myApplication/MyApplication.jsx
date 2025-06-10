import React, { Suspense} from 'react';
import ApplicationList from './ApplicationList';
import ApplicationState from './ApplicationState';
import useAuth from '../../CustomHook/useAuth';
import { myApplicationsPromise } from '../../Api/ApplicationApi';

//you can use it here, if only you want to use for single time for this page but if you want to use it in other component too then you can use it in different component and just call it from here.(like you use in Api folder) 
// const myApplicationsPromise = email => {
//     return fetch(`http://localhost:4000/applications?email=${email}`).then(res=>res.json())
// }


const MyApplication = () => {

    const {user} = useAuth()
    //get firebase admin access token
    // console.log(user.accessToken)

    return (
        <div className=''>
            <ApplicationState></ApplicationState>
            <Suspense fallback={<span className="loading loading-spinner text-secondary"></span>}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;