//get all careers APIs
export const getAllCareers = async() => {

    let res = await fetch('http://localhost:3000/career/');
    let payload = await res.json();

    return {
        type: 'GET_CAREERS',
        payload
    }
}

//post login info and get token APIs
export const user_login = async(info) => {
    
    let res = await fetch('http://localhost:3000/users/signin', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(info)
      });

    let payload = await res.json();

    return {
        type: 'LOGIN',
        payload
    }
}
//post signup info APIs
export const user_signup = async(info) => {
    
    let res = await fetch('http://localhost:3000/users/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(info)
      });

    let payload = await res.json();

    return {
        type: 'SIGNUP',
        payload
    }
}

//get user information by mail
export const get_full_user_info = async(email) => {

    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    
    const res = await fetch(
        `http://localhost:3000/users/userInfo/${email}`,
        requestOptions
    );

    let payload = await res.json();

    return {
        type: 'GET_ALL_USER_INFO',
        payload
    }
}

//update userInfo by id APIs
export const update_user_data = async(info, id) => {
    console.log(info)
    let res = await fetch(`http://localhost:3000/users/updateuser/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(info)
      });

    let payload = await res.json();

    return {
        type: 'UPDATE_USER_DATA',
        payload
    }
}

//Join track selected with user APIs
export const join_track_with_user = async(info) => {
    
    let res = await fetch('http://localhost:3000/userCareer/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(info)
      });

    let payload = await res.json();

    return {
        type: 'JOIN_TRACK_WITH_USER',
        payload
    }
}

//update step with user APIs
export const update_user_career = async(info, id) => {
    
    let res = await fetch(`http://localhost:3000/userCareer/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
   
        body: JSON.stringify(info)
      });

    let payload = await res.json();

    return {
        type: 'UPDATE_USER_CAREER',
        payload
    }
}

//get all users careers
export const getAllUsersCareers = async() => {

    let res = await fetch('http://localhost:3000/userCareer/');
    let payload = await res.json();

    return {
        type: 'GET_USERS_CAREERS',
        payload
    }
}
//get all tracks in a career by name APIs

export const getTracks = async(careerName) => {

    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    
    const res = await fetch(
        `http://localhost:3000/career/tracks/${careerName}`,
        requestOptions
    );

    let payload = await res.json();

    return {
        type: 'GET_TRACKS',
        payload
    }
}
