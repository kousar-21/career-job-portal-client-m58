export const createdJobByPromise = email => {
    return fetch(`http://localhost:4000/jobs/applications?email=${email}`,{
        credentials: 'include'
    }).then(res=>res.json())
}