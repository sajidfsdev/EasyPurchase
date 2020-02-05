import React,{ useState } from 'react';
import classes from './TopBar.module.css';

import Dialogue from '../../../Reusable/Dialogue';
import { useDispatch } from 'react-redux';
import * as AuthActions from '../../../Store/Action/Auth';

const TopBar=(props)=>{

    //Modal state starts here.....
    const [openState,setOpenState]=useState(false);
    const dispatch=useDispatch();
    //Modal state ends here.......

    //Dialogue methods starts here.....
    const handleOpenDialogue=()=>{
        setOpenState(true);
    }

    const handleCloseDialogue=()=>{
        setOpenState(false);
    }

    const handleLogout=()=>{
        dispatch(AuthActions.handleLogout());
    }//........................
    //Dialogue methods ends here.......

    //return statement starts here.....
    return (
        <React.Fragment>

            <Dialogue 
                open={openState}
                handleClose={handleCloseDialogue}
                title="Trying Logging Out"
                body="Are You Sure You Want To Logout ?"
            >
                <button onClick={handleCloseDialogue} className="btn btn-primary">Cancel</button>
                <button onClick={handleLogout} className="btn btn-success">Logout</button>
            </Dialogue>

            <div className={classes.topBar}>

            {/* Left content starts here.... */}
            <div className={classes.leftContent}>
                <div className={classes.horizontalPadding}></div>
                <i style={{cursor:'pointer'}} className="fab fa-react fa-2x text-primary"></i>
                <div className={classes.horizontalPadding}></div>
                <div className={classes.adjustments+" text-primary"}>Easy Purchase</div>
            </div>
            {/* Left content ends here...... */}

            {/* Right content starts here...... */}
            <div className={classes.rightContent}>
                <div className={classes.horizontalPadding}></div>
                <i title="Logout" onClick={handleOpenDialogue} style={{cursor:'pointer'}} className="fas fa-sign-out-alt fa-2x text-danger"></i>
                <div className={classes.horizontalPadding}></div>
            </div>
            {/* Right content ends here........ */}

        </div>
        </React.Fragment>
    );
    //return statement ends here.......

}//...................................

export default TopBar;