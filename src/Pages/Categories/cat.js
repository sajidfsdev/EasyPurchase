import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classes from './cat.module.css';

//component imports......
import TopBar from '../../Components/Categories/TopBar/TopBar';
import Card from '../../Reusable/CatCard/CatCard';


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


const Cat=(props)=>{

    //material UI init...
    const UIclasses = useStyles();

    //state management starts here....
    const [catState,setCatState]=useState(["Electronics","Mobile","Laptop"]);
    //state management ends here......

    //return starts here.....
    return (
        <React.Fragment>
            
            {/* Top Bar for maintaining Links starts here.... */}
            <TopBar />
            {/* Top Bar for maintaining Link ends here....... */}


            {/* Main Input starts here..... */}
            <div className={classes.inputDiv}>
                <form>
                    <TextField required className={UIclasses.root} id="add cat" label="Add Category" variant="outlined" />
                    <button type="submit" className={classes.btn+" btn btn-success"}>ADD</button>
                </form>
            </div>
            {/* Main Input ends here....... */}




            {/* Screen Builder starts here....... */}
            <div className={classes.screen}>
                {
                    catState.length===0?
                    (
                        <div></div>
                    )
                    :
                    (
                        <div className="container">
                            <div className="row">
                                {
                                    catState.map((elem,index)=>{
                                        return (
                                            <div key={index} className="col">
                                                <Card>{elem}</Card>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            {/* Screen Builder ends here......... */}

        </React.Fragment>
    );
    //return ends here.......

}//..................


export default Cat;