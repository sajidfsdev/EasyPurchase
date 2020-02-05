import React from 'react';

//Material UI Dialogue Starts Here.....
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//Material UI Dialogue ends here.......


//Documentation...................
//props......
//          open : true/false
//          title: String
//          body : String
//          handleClose: ()  

// children {buttons}

const Dialogue=(props)=>{

    //return statement starts here.....
    return (
        <React.Fragment>
             {/* Modal code testing starts here..... */}
             <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
              props.children
          }
        </DialogActions>
      </Dialog>
            {/* Modal code testing ends here..... */}
        </React.Fragment>
    );
    //return statement ends here.......


}//......................

export default Dialogue;