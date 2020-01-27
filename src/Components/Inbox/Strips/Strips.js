import React from 'react';
import classes from './Strips.module.css';

const Strips=props=>{

    //Classes man starts here...
    const UnReadClass=classes.unReadContainer+" row";
    const ReadClass=classes.readContainer+" row";
    //Classes man ends here.....


    //Method starts here.............
    const AlterDetails=(converse)=>{
        props.setConversation(converse);
        props.alter();
    }
    //Method ends here...............

    //return statement starts here....
    return (
        <React.Fragment>
            {
                //First Rendering All Unread Messages ..........
                props.data.filter(elem=>elem.highlight===true).map((elem,index)=>{
                    return (
                        <div key={index} onClick={()=>{AlterDetails(elem)}} className={elem.highlight===true?UnReadClass:ReadClass}>

                                <div className={classes.stripText+" col-2"}>{index+1}</div>

                                <div className={classes.stripText+" col-2"}>{elem.name}</div>

                                <div className={classes.stripText+" col-2"}>{elem.type}</div>

                                <div className={classes.stripText+" col-6"}>{elem.converse[elem.converse.length-1].message}</div>
                        </div>
                    )
                })
            }


{
                //First Rendering All Read Messages ..........
                props.data.filter(elem=>elem.highlight===false).map((elem,index)=>{
                    return (
                        <div key={index} onClick={()=>{AlterDetails(elem)}} className={elem.highlight===true?UnReadClass:ReadClass}>

                                <div className={classes.stripText+" col-2"}>{index+1}</div>

                                <div className={classes.stripText+" col-2"}>{elem.name}</div>

                                <div className={classes.stripText+" col-2"}>{elem.type}</div>

                                <div className={classes.stripText+" col-6"}>{elem.converse[elem.converse.length-1].message}</div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    );
    //return statement ends here......

}//...................

export default Strips;