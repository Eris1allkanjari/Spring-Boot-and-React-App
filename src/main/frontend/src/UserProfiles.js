import React , {useState,useEffect} from 'react';
import axios from "axios";

const UserProfiles = () => {

const [userProfiles,setUserProfiles] = useState([]);
    const fetchUserProfiles = () => {
      axios.get("http://localhost:8080/api/v1/user-profile",).then(res => {
        console.log(res);
        setUserProfiles(res.data);
      });
    }
    useEffect( () => {
      fetchUserProfiles();
    },[]);
  
    return userProfiles.map((userProfile,index) => {
        return (
        <div key={index}>
            <h1>{userProfile.userName}</h1>
            <h1>{userProfile.userProfileId}</h1>

        </div>
        )
    })
  };

  export default UserProfiles;