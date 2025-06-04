import React from 'react';

const AddJobs = () => {


    const handleAddJob = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())
        console.log(data)
    }

    return (
        <div>
            <h3 className="text-3xl text-blue-600 py-10">please add a Job</h3>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="Company name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="text" name='company_logo' className="input" placeholder="Company Logo Url" />
                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="metaframeworks" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="On-Site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
                    </div>


                </fieldset>

                {/* Dropdown Job Category from daisy ui select component */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" name='category' className="select">
                        <option disabled={true}>Select Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>


                </fieldset>

                {/* Application Dead line */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Dead line</legend>
                    <input type="date" className="input" />

                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name='min' className="input" placeholder="Minimum Salary" />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input type="text" name='max' className="input" placeholder="Maximum Salary" />
                        </div>

                        <div>
                            <label className="label">Select Currency</label>
                            <select defaultValue="Select Currency" name='currency' className="select">
                                <option disabled={true}>Please Select Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>Euro</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea" name='description' placeholder="Job Description"></textarea>

                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend"> Requirements</legend>
                    <textarea className="textarea" name='requirements (separate by comma)' placeholder="Job Requirements"></textarea>

                </fieldset>

                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend"> Job Responsibilities</legend>
                    <textarea className="textarea" name='responsibilities (separate by comma)' placeholder="Job Responsibilities"></textarea>

                </fieldset>

                {/* HR related Information */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Hr Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="text" name='email' className="input" placeholder="HR Email" />

                    
                </fieldset>

                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>
        </div>
    );
};

export default AddJobs;