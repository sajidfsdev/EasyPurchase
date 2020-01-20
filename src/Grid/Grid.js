import React from 'react';
import classes from './Grid.module.css';

import TopBar from '../Components/Grid/TopBar/TopBar';
import Nav from '../Components/Grid/Nav/Nav';

const Grid=(props)=>{

    //return starts here.....
    return (
        <React.Fragment>
            
            {/* Top bar starts here..... */}
            <TopBar />
            {/* Top Bar ends here....... */}



            {/* Left right grid starts here.... */}
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <Nav />
                </div>
                <div className={classes.rightContainer}>Right container</div>
            </div>
            {/* Left right grid ends here...... */}

        </React.Fragment>
    );
    //return ends here.......

}//.....................

export default Grid;