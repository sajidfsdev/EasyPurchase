import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav=(props)=>{

    //return statement starts here......
    return (
        <React.Fragment>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <NavLink activeClassName={classes.active}>Home</NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink activeClassName={classes.active}>Home</NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink activeClassName={classes.active}>Home</NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink activeClassName={classes.active}>Home</NavLink>
                </li>
            </ul>
        </React.Fragment>
    );
    //return statement ends here........

}//.................

export default Nav;