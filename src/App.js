import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//pages imports......
import LoginPage from './Pages/Login/Login';
import Grid from './Grid/Grid';

const App=(props)=>{

  //return statement starts here......
  return (
    <React.Fragment>
           <BrowserRouter>
              <Grid />
           </BrowserRouter>
    </React.Fragment>
  );
  //return statement ends here........

}//.....................

export default App;