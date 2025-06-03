import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobsDetails = () => {
    const { _id, title, company } = useLoaderData();

    return (
        <div>
            <h1 className="text-6xl pt-5 text-blue-400 text-shadow-blue-950">Job Details of : {title}</h1>
            <h3 className='text-lg py-5 text-gray-500'>Company:  {company}</h3>
            <Link to={`/applyJob/${_id}`}>
                <button className='btn btn-primary my-5'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobsDetails;