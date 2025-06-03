import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';

const JobsCard = ({ job }) => {
    const { title, location, _id, requirements, salaryRange, description, company, company_logo } = job;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className='flex gap-5 pt-5 pl-7'>
                    <figure>
                        <img
                            src={company_logo}
                            className='size-20'
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h1 className='text-xl'>{company}</h1>
                        <h3 className='flex items-center gap-1 text-sm text-gray-500'><FaMapMarkerAlt size={12} />{location}</h3>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <p>{description}</p>
                    <div className="card-actions">
                        {
                            requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                        }


                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;