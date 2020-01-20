import React from 'react';
import classes from './TopBar.module.css';

const TopBar=(props)=>{

    //return statement starts here.....
    return (
        <React.Fragment>
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
                <i style={{cursor:'pointer'}} className="fas fa-sign-out-alt fa-2x text-danger"></i>
                <div className={classes.horizontalPadding}></div>
            </div>
            {/* Right content ends here........ */}

        </div>
        </React.Fragment>
    );
    //return statement ends here.......

}//...................................

export default TopBar;