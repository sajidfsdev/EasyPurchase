import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';

import classes from './Login.module.css';


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

                    <div className={classes.field}>
                        <form className={UIclasses.root} noValidate autoComplete="off">
                            <TextField type="text" id="username" label="Username" variant="outlined" />
                        </form>
                    </div>

                    <div className={classes.field}>
                        <form className={UIclasses.root} noValidate autoComplete="off">
                            <TextField type="password" id="password" label="Password" variant="outlined" />
                        </form>
                    </div>

                    <div className={classes.submitDiv}>
                        <Button color="success" block={true} >Login</Button>
                    </div>

                </div>
            </div>
            {/* Body div ends here....... */}
        </React.Fragment>
    );
    //return ends here........

}//....................

export default Login;