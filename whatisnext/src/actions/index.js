// add user API
// const baseURL = "http://localhost:3001/users";

export const addUser = async(userInfo) => {

    // console.log("ACTION RECEIVED DATA", userInfo);
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(userInfo)
      };
    const res = await fetch('http://localhost:3000/users/signup', requestOptions);

    let payload = await res.json();
    
    return {
        type: 'ADD_USER',
        payload
    }
}

//Get UserData API
// const userURL = "http://localhost:3010/user";
export const getUserData = async(loginInfo) => {
    // console.log(loginInfo)
    const res = await fetch('http://localhost:3000/users/signin', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(loginInfo)
      });

    let payload = await res.json();
    
    console.log("USER DATA LOGIN", payload.message);
    return {
        type: 'GET_USER_DATA',
        payload: payload.message
    }
}
// Roadmaps API

// const dataURL = ;

export const getRoadmap = async(career, track) => {
    // console.log(career);
    const response = await fetch("http://localhost:3000/career/");
    // console.log(response)
    let payload = await response.json();
    // let payload = 
    // console.log("GET ROADMAP", payload);
    return {
        type:"GET_ROADMAP",
        payload: payload.career.map( (cr) => {
            if(cr.careerName === career) {
                return cr.track.map( (tr) => {
                    if(tr.trackName === track) {
                        return tr.course
                    }
                })
            }
        })
    }
}

//get user by id
export const getUserById = async(id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    let payload = await response.json();
    // console.log("DATA", payload);
    return {
        type:"GET_FULL_DATA",
        payload
    }
    
}

//update user data by id:
export const updateUserById = async(id, userInfo) => {

    // console.log("ACTION RECEIVED DATA", userInfo);
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(userInfo)
      };
    const res = await fetch(`http://localhost:3000/users/updateuser/${id}`, requestOptions);

    let payload = await res.json();
    
    return {
        type: 'UPDATE_USER',
        payload
    }
}

//samples API
export const getSamples = async() => {

    const response = await fetch("http://localhost:3003/samples");
    let payload = await response.json();
    // console.log("DATA", payload);
    return {
        type:"GET_SAMPLES",
        payload
    }
}

export const addSample = async(sampleInfo) => {

    // console.log("ACTION RECEIVED DATA", sampleInfo);
    
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

//careers: get all careers:
export const getCareers = async() => {

    const response = await fetch("http://localhost:3000/career/");
    let payload = await response.json();
    // console.log("DATA", payload);
    return {
        type:"GET_CAREERS",
        payload
    }
}

//get userCareer 
export const UpdateUserCareers = async(career_id, careerInfo) => {

    // console.log("ACTION RECEIVED DATA", careerInfo);
    const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(careerInfo)
      };
    const res = await fetch(`http://localhost:3000/userCareer/${career_id}`, requestOptions);

    let payload = await res.json();
    // console.log("USERCAREER", payload);
    return {
        type: 'UPDATE_USER_CAREER',
        payload
    }
}

//get all user_career 
export const gatAllUserCareer = async() => {

    const response = await fetch("http://localhost:3000/userCareer/");
    let payload = await response.json();
    // console.log("DATA", payload);
    return {
        type:"GET_ALL_USER_CAREER",
        payload
    }
}
//get all user data by mail 
export const getUserInfo = async(mail) => {
    // console.log("EMAIL", mail);
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    
    const res = await fetch(
        `http://localhost:3000/users/userInfo/${mail}`,
        requestOptions
    );

    let payload = await res.json();

    // console.log("USERCAREER", payload);

    return {
        type: 'GET_ALL_USER_INFO',
        payload
    }
}

// /userInfo/
//Resources APIs
// export const getAllResources = async(career, track) => {

//     const response = await fetch("http://localhost:3000/career/");
//     let data = await response.json();
//     let payload = data.career.map( (cr) => {

//         if(cr.careerName === career) {
//             return cr.track.map( (tr) => {
//                 if(tr.trackName === track) {
//                     return tr.course
//                 }
//             })
//         }
//         // return payload;
//     })
    
//     console.log("DATA", payload);
//     return {
//         type:"GET_RESOURCES",
//         payload
//     }
// }

//career information APIs
// export const getInformation = async(title) => {

//     const response = await fetch(`http://localhost:3020/careers/${title}`);
//     let payload = await response.json();
//     console.log("INFORMATION", payload.title);
//     return {
//         type:"GET_INFORMATION",
//         payload: payload.title
//     }
// }

//update user status
export const updateUserStatus  = async(status) => {

    return{
        type: 'UPDATE_STATUS',
        payload: status
    }
}