// add user API
const baseURL = "http://localhost:3001/users";

export const addUser = async(userInfo) => {

    console.log("ACTION RECEIVED DATA", userInfo);
    
    const res = await fetch(baseURL, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(userInfo)
    });

    let payload = await res.json();
    
    return {
        type: 'ADD_USER',
        payload
    }
}

// Roadmaps API

const dataURL = "http://localhost:3002/steps";

export const getRoadmap = async() => {

    const response = await fetch(dataURL);
    let payload = await response.json();
    console.log("DATA", payload);
    return {
        type:"GET_ROADMAP",
        payload
    }
}