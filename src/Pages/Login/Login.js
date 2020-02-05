import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';

import classes from './Login.module.css';

import { useSelector,useDispatch } from 'react-redux';
import * as AuthActions from '../../Store/Action/Auth';
import * as AppTypes from '../../Store/Constants/App';


//utility methods.......
const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 350,
      },
    },
  }));
  //....................


const Login=(props)=>{

    //ui classes.....
    const UIclasses = useStyles();

    //Redux state starts......
    const errorMessage_RP=useSelector(state=>state.auth.errorMessage);
    const dispatch=useDispatch();


    //state management starts here.....
    const [emailState,setEmailState]=useState("");
    const [passState,setPassState]=useState("");
    //state managemet ends here........


    //Methods starts here...........
    const onFormSubmit=(event)=>{
        event.preventDefault();

        //dispatching bufferring......
        dispatch({type:AppTypes.STARTAPPBUFFERRING});

        //dispatching Action....
        dispatch(AuthActions.handleLogin(emailState,passState));
        
   }
    //Methods ends here.............


    //Handle email change starts here......
    const handleEmailChange=(event)=>{

        setEmailState(event.target.value);
    }
    //Handle email state change ends here...


    //Handle Pass chnage starts here.....
    const handlePassChange=(event)=>{

        setPassState(event.target.value);
    }
    //Handle pass state ends here........

    //return starts here......
    return (
        <React.Fragment>
            {/* Body div starts here..... */}
            <div className={classes.main}>
                <div className={classes.card}>

                    <div className={classes.iconDiv}>
                        <i className="fas fa-user-lock text-primary fa-4x"></i>
                    </div>

                    <div className={classes.heading}>
                        Admin Pannel
                    </div>

                    <div className={classes.errorField}>
                        {errorMessage_RP}
                    </div>

                    <form onSubmit={onFormSubmit}>

                    <div className={classes.field}>
                            <TextField value={emailState} onChange={handleEmailChange} required className={UIclasses.root} type="text" id="username" label="Username" variant="outlined" />
                    </div>

                    <div className={classes.field}>
                            <TextField value={passState} onChange={handlePassChange} required className={UIclasses.root} type="password" id="password" label="Password" variant="outlined" />
                    </div>

                    <div className={classes.submitDiv}>
                        <Button color="success" block={true} >Login</Button>
                    </div>
                    </form>

                </div>
            </div>
            {/* Body div ends here....... */}
        </React.Fragment>
    );
    //return ends here........

}//....................

export default Login;