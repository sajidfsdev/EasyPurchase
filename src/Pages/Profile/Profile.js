import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classes from './Profile.module.css';

//Material UI work starts here....
const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 400,
      },
    },
  }));
//Material UI work ends here......

const Profile=(props)=>{

    //material UI init...
    const UIclasses = useStyles();

    //return starts here.....
    return (
        <React.Fragment>
            <div className={classes.container}>

            {/* Heading starts here.... */}
            <div className={classes.heading}>
                <i></i>
                <div className={classes.title}>Manage Your Profile</div>
                <div className={classes.avatar}></div>
            </div>
            {/* Heading ends here...... */}


            {/* Form starts here.... */}
            <form>

                {/* Text strip starts here..... */}
                <div className={classes.strip}>
                    <TextField required type="text" className={UIclasses.root} id="name" label="Your Name" variant="outlined" />
                    <TextField required type="email" className={UIclasses.root} id="email" label="Email Address" variant="outlined" />
                </div>
                {/* Text strip ends here....... */}


                {/* Text strip starts here..... */}
                <div className={classes.strip}>
                    <TextField required type="password" className={UIclasses.root} id="password" label="Password" variant="outlined" />
                    <TextField required type="password" className={UIclasses.root} id="confirm password" label="Confirm Password" variant="outlined" />
                </div>
                {/* Text strip ends here....... */}


                {/* Btn Row starts here..... */}
                <div className={classes.btnDiv}>
                    <button type="submit" className="btn btn-success btn-block">Update</button>
                </div>
                {/* Btn Row Ends Here....... */}

            </form>
            {/* Form Ends Here...... */}


            </div>
        </React.Fragment>
    );
    //return ends here.......

}//.....................

export default Profile;