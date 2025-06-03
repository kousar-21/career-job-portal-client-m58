import React, { use } from 'react';
import ApplicationListRow from './ApplicationListRow';

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise)
    return (
        <div>
            <h3 className="text-3xl">job Application so far: {applications.length}</h3>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => <ApplicationListRow key={application._id} index={index} application={application}></ApplicationListRow>)
                        }
                      
                       
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;