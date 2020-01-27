import React,{ useState } from 'react';
import classes from './Inbox.module.css';

import Strips from '../../Components/Inbox/Strips/Strips';
import Conversation from '../../Components/Inbox/Conversation/Conversation';


const Inbox=(props)=>{

    //state management starts here......
    const [converseState,setConverseState]=useState(
        [
            {
                userId:1,
                name:"Sajid Ali",
                type:"Buyer",
                highlight:false,
                converse:[
                    {
                        writer:"me",
                        message:"Hello",
                        date:"some date",
                        time:"some time"
                    },
                    {
                        writer:"admin",
                        message:"Yes Admin There",
                        date:"some date",
                        time:"some time"
                    }
                ]
            },
            
                {
                    userId:2,
                    name:"Imran Aslam",
                    type:"Vendor",
                    highlight:true,
                    converse:[
                        {
                            writer:"me",
                            message:"Hi I want to inquire about my Order No 2",
                            date:"some date",
                            time:"some time"
                        },
                        {
                            writer:"admin",
                            message:"Just wait I am processing that request",
                            date:"some date",
                            time:"some time"
                        },
                        {
                            writer:"me",
                            message:"Ok No Problem",
                            date:"some date",
                            time:"some time"
                        },

                        {
                            writer:"admin",
                            message:"I have fetched Record No Issue In That",
                            date:"some date",
                            time:"some time"
                        },

                        {
                            writer:"me",
                            message:"That's Fine",
                            date:"some date",
                            time:"some time"
                        },
                        {
                            writer:"admin",
                            message:"I have fetched Record No Issue In That",
                            date:"some date",
                            time:"some time"
                        },

                        {
                            writer:"me",
                            message:"That's Fine",
                            date:"some date",
                            time:"some time"
                        },
                        {
                            writer:"admin",
                            message:"I have fetched Record No Issue In That",
                            date:"some date",
                            time:"some time"
                        },

                        {
                            writer:"me",
                            message:"That's Fine",
                            date:"some date",
                            time:"some time"
                        },
                        {
                            writer:"admin",
                            message:"I have fetched Record No Issue In That",
                            date:"some date",
                            time:"some time"
                        },

                        {
                            writer:"me",
                            message:"That's Fine",
                            date:"some date",
                            time:"some time"
                        },
                        {
                            writer:"admin",
                            message:"I have fetched Record No Issue In That",
                            date:"some date",
                            time:"some time"
                        },

                        {
                            writer:"me",
                            message:"That's Fine",
                            date:"some date",
                            time:"some time"
                        }
                    ]
                }
            
        ]
    );

    const [detailState,setDetailState]=useState(false);
    const [currentConversation,setCurrentConversation]=useState(null);
    //state management ends here........



    ////////////////////Methods Starts Here...............
    const AlterDisplay=()=>{
        setDetailState(!detailState);
    }

    const setCurrConversation=(conversation)=>{
        setCurrentConversation(JSON.parse(JSON.stringify(conversation)));
    }
    ///////////////////Methods ends here..................


    //GUI man starts here.....
    let mainGUI=null;
    let mainHeading="";

    switch (detailState) {
        case false:
            mainHeading="Inbox Messages"
            break;
    
        default:
                mainHeading="Conversations with "+currentConversation.name;
            break;
    }
    //GUI man ends here.......




    //return statement starts here...
    return (
        <React.Fragment>

            {/* Heading starts here.... */}
            <div className={classes.heading}>
                {mainHeading}
            </div>
            {/* Heading ends here.... */}

            {
                detailState===false?
                (
                    <div className={classes.screen}>
                        <Strips data={converseState} alter={AlterDisplay} setConversation={setCurrConversation} />
                    </div>
                )
                :
                (<Conversation conversation={currentConversation} />)
            }
            {/* Screen area ends here....... */}
            
        </React.Fragment>
    );
    //return statement ends here.....

}//....................

export default Inbox;