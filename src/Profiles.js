
import  React from 'react';
function Profiles(){

    const [getprofiles, setProfiles] = React.useState(false);
    return(
        <div>
        {
            getprofiles? <h1>welcome to profile</h1>:<h1>welcome to guest</h1>
        }
    </div>

    );
   
}
export default Profiles;
