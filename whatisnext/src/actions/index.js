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

//Get UserData API
const userURL = "http://localhost:3010/user";
export const getUserData = async() => {
    
    const res = await fetch(userURL);

    let payload = await res.json();
    
    console.log("USER DATA", payload);
    return {
        type: 'GET_USER_DATA',
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

//pass All user data between components
export const updateUserData = (arr) => {
    
    return {
        type:"UPDATE_USER_DATA",
        payload: arr
    }
}

//samples API
export const getSamples = async() => {

    const response = await fetch("http://localhost:3003/samples");
    let payload = await response.json();
    console.log("DATA", payload);
    return {
        type:"GET_SAMPLES",
        payload
    }
}

export const addSample = async(sampleInfo) => {

    console.log("ACTION RECEIVED DATA", sampleInfo);
    
    const res = await fetch("http://localhost:3003/samples", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(sampleInfo)
    });

    let payload = await res.json();
    
    return {
        type: 'ADD_SAMPLE',
        payload
    }
}