import React from 'react';
import classes from './Conversation.module.css';



const Conversation=(props)=>{


 
    //return statement starts here....
    return (
        <React.Fragment>
            <div className={classes.window}>
                
                {/* Top Box starts here..... */}
                <div className={classes.topBox}>
                    {
                        props.conversation.converse.map((elem,index)=>{
                            return (
                                <div key={index} className={classes.row}>
                                    {
                                        elem.writer==="me"?(
                                        <div className={classes.rightRow}>
                                            <div className={classes.meMessage}>
                                                {elem.message}
                                            </div>
                                        </div>
                                        ):(
                                        <div className={classes.leftRow}>
                                            <div className={classes.adminMessage}>
                                                {elem.message}
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                {/* Top Box ends here....... */}


                {/* Bottom Box Starts Here...... */}
                <div className={classes.bottomBox}>
                    <input 
                        type="text"
                        className={classes.input}

                    />

                    <button className="btn btn-success">Submit</button>
                </div>
                {/* Bottom Box Ends Here........ */}
            </div>
        </React.Fragment>
    );
    //return statemenet ends here.....

}//...........................

export default Conversation;