export const myApplicationsPromise = (email, accessToken) => {
    return fetch(`http://localhost:4000/applications?email=${email}`,{
        credentials: 'include',
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
}