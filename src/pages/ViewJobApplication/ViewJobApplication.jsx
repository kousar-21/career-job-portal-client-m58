import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewJobApplication = () => {
    const { job_id } = useParams()
    const application = useLoaderData();
    // console.log(application)
    const handleStatusChange = (e, app_Id) => {
        console.log(e.target.value, app_Id)

        axios.patch(`http://localhost:4000/applications/${app_Id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Applications status has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <h1 className="text-3xl text-blue-600 py-10">{application.length} This is Applicant job id:  {job_id}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            application.map((applicants, index) => <tr key={index}>
                                <th>1</th>
                                <td>{applicants.applicant}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select onChange={e => handleStatusChange(e, applicants._id)} defaultValue="update value" className="select">
                                        <option value="update value" disabled={true}>update value</option>
                                        <option value="Pending">Pending</option>
                                        <option value="InterView">InterView</option>
                                        <option value="Hired">Hired</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewJobApplication;