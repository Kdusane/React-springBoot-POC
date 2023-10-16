import React from "react";

function Login(){
    const [getUserId,setUserId] = React.useState("");
    const [getPasword,setPassword] = React.useState("");
    const [getEmailId,setEmailId] = React.useState("");
    const [getUserStatus,setUserStatus] = React.useState(false);
    const [getPassStatus,setPassStatus] = React.useState(false);
    const [getEmailStatus,setEmailStatus] = React.useState(false);


    function onclickButton(e){

        if(getUserId.length < 3 || getPasword.length < 3 ){
   
            console.log(getUserId)
            alert("please enter correct values")
        }
        else{
            
            alert("you are login successfully ")
        }
        e.preventDefault();
        

    }

    function userNameHandle(e){
        let usernameDetails = e.target.value;
        if(usernameDetails.length > 3 ){
            setUserStatus(true)
            console.log(" to call username Handle "+setUserId.target);
        }else{
            setUserStatus(false)
        }
        setUserId(usernameDetails);

    }function passwordHandle(e){
        let pass =  e.target.value;
        if(pass.length > 3){
            setPassStatus(true)
        }
        else{
            setPassStatus(false)
        }
        setPassword(pass);

    }function emailId(e){
        let emailId = e.target.value;
        if (getEmailId.length > 3) {
            
            setEmailStatus(true)
            
        }else{
            setEmailStatus(false)
        }
        setEmailId(emailId)

    }
    return(
        <div>
            <form onSubmit={onclickButton}>
                <input  type = 'text' onChange={userNameHandle}
            
                 placeholder="Enter your username "/><br/>{getUserStatus?"":<span>please enter correct user </span>}
                <input  type = 'password' onChange={passwordHandle} placeholder="Enter your password "/>{getPassStatus?"":<span>please enter correect password 
                    </span>}
                <input  type = 'text' onChange={emailId} placeholder="Enter your email Adderss "/><br/>{getEmailStatus?<span>Please enter corrent email Id  </span>:" "}

                <button type="submit" > click Here </button>
              
            </form>
        </div>
    );
}
export default Login;