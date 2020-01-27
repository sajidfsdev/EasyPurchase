import React from 'react';
import classes from './CatCard.module.css';

const CatCard=(props)=>{

    //return starts here.....
    return (
        <React.Fragment>
            <div className={classes.cart}>
                {props.children}
                <i style={{cursor:'pointer'}} className="fas fa-cancel text-danger"></i>
            </div>
        </React.Fragment>
    );
    //return ends here.......

}//.....................

export default CatCard;