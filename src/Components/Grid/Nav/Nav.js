import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav=(props)=>{

    //return statement starts here......
    return (
        <React.Fragment>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <NavLink exact to="/" className={classes.navlink} activeClassName={classes.active}>
                        <i className="fas fa-sitemap"></i>
                        &nbsp;&nbsp;
                        Categories
                    </NavLink>
                </li>
                <li className={classes.li}>
                        <NavLink exact to="/profile" className={classes.navlink} activeClassName={classes.active}>
                                <i className="fas fa-sitemap"></i>
                                &nbsp;&nbsp;
                                Profile
                        </NavLink>
                </li>
                <li className={classes.li}>
                    <i className="fas fa-sitemap text-white"></i>
                            <NavLink exact to="/inbox" className={classes.navlink} activeClassName={classes.active}>
                                <i className="fas fa-sitemap"></i>
                                &nbsp;&nbsp;
                                Inbox
                            </NavLink>
                    </li>
                <li className={classes.li}>
                        <i className="fas fa-sitemap text-white"></i>
                        <label className={classes.label}>Categories</label>
                </li>
            </ul>
        </React.Fragment>
    );
    //return statement ends here........

}//.................

export default Nav;