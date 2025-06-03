export const myApplicationsPromise = email => {
    return fetch(`http://localhost:4000/applications?email=${email}`).then(res=>res.json())
}