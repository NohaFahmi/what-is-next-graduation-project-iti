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