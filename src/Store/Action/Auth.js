import * as Types from '../Constants/Auth';
import AppConst from '../../Constants/Strings';
import * as AppTypes from '../../Store/Constants/App';
import axios from 'axios';


//Handling Auth Checking starts.........
export const handleAuthChecking=()=>{

    //It will search session storage.......
    //1 if present then set values.........
    //else set Un Auth and direct to login...

    const payload=sessionStorage.getItem(AppConst.sessionStorage);
    if(payload)
    {
        //window.alert("payload found");
        return {
            type:Types.PERSON_AUTH_TRUE,
            payload:JSON.parse(JSON.stringify(payload))
        };
    }
    else
    {
        return {
            type:Types.PERSON_AUTH_FALSE,
            payload:{
                errorMessage:""
            }
        };
    }
}
//Handling Auth Checking Ends Here......







//Handle Login Starts Here.........................
export const handleLogin=(email,password)=>{
    
                                    //Sudo code.....
    //first email and password to API
    //get response...................
    //if yes --> set session storage
    //                              set reddux isAuth
    //else
    //    set Redux isAuth False
    //    delete session storage

    //alert(email);
    //alert(password);

    return async dispatch=>{

        const body=JSON.stringify({
            email:email,
            password:password
        });

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        };

        //try catc starts here......
        try
        {
            const res=await axios.post(AppConst.server+"/admin/auth/login",body,config);

            if(res)
            {
                //alert("response has come");

                //Setting Session Storage Starts Here.....
                const payload={
                    token:res.data.token,
                    fname:res.data.fname,
                    lname:res.data.lname,
                    email:res.data.email,
                }
                sessionStorage.setItem(AppConst.sessionStorage,payload);
                //Setting Session Storage Ends Here.......
                //console.log(res.data);
                dispatch({type:AppTypes.STOPAPPBUFFERRING});
                return dispatch({
                    type:Types.PERSON_AUTH_TRUE,
                    payload:JSON.parse(JSON.stringify(payload))
                });
            }
            else
            {
                //alert("No Response");

                //Clearing Session Storage.....
                sessionStorage.removeItem(AppConst.sessionStorage);
                dispatch({type:AppTypes.STOPAPPBUFFERRING});
                return dispatch({
                    type:Types.PERSON_AUTH_FALSE,
                    payload:{
                        errorMessage:"Network Error"
                    }
                });
            }
        }
        catch(err)
        {
            if(err.response)
            {
                //alert("error with resp "+err.response.data.errorMessage);
                 //Clearing Session Storage.....
                 sessionStorage.removeItem(AppConst.sessionStorage);
                 dispatch({type:AppTypes.STOPAPPBUFFERRING});
                return dispatch({
                    type:Types.PERSON_AUTH_FALSE,
                    payload:{
                        errorMessage:err.response.data.errorMessage
                    }
                });
            }
            else
            {
                //alert("error: "+err.message);
                 //Clearing Session Storage.....
                 sessionStorage.removeItem(AppConst.sessionStorage);
                 dispatch({type:AppTypes.STOPAPPBUFFERRING});
                return dispatch({
                    type:Types.PERSON_AUTH_FALSE,
                    payload:{
                        errorMessage:err.message
                    }
                });
            }
        }
        //try catch ends here.......

    }//return method ends here.....................

}
//Handle Login Ends Here...........................








//Handle Logout Starts Here.............
export const handleLogout=()=>{

    sessionStorage.removeItem(AppConst.sessionStorage);

    return {
        type:Types.PERSON_AUTH_FALSE,
        payload:{
            errorMessage:""
        }
    };
}
//Handle Logout Ends Here...............