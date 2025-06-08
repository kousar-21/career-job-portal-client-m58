import React, { use } from 'react';
import { Link } from 'react-router';

const MyJobsList = ({ createdJobByPromise }) => {
    const jobs = use(createdJobByPromise);
    console.log(jobs)
    return (
        <div>
            <h1 className="text-3xl text-blue-600 py-5">My Created job: {jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Job Deadline</th>
                            <th>Job Applicants Number</th>
                            <th>Job Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            jobs.map((job, index)=><tr key={index} job={job}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.deadline}</td>
                            <td>{job.application_count}</td>
                            <td><Link to={`/application/${job._id}`}>View Job Applications</Link></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobsList;