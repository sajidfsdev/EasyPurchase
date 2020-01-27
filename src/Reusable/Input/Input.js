import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//Props.......
//....1   width
//....2   required
//....3   type
//....4   label
//....5   variant



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

const Input=(props)=>{


  


    //material UI init...
    const UIclasses = useStyles();



    //return statement starts here....
    return (

        <TextField 
            required={props.required}
            type={props.type} 
            className={UIclasses.root} 
            label={props.label}
            variant={props.variant} 
            {...props}
        />

    );
    //return statement ends here......

}//....................

export default Input;
