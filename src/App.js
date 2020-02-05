import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as AuthActions from './Store/Action/Auth';

//components starts....
import Spinner from './Reusable/Bufferring/Bufferring';

//pages imports......
import LoginPage from './Pages/Login/Login';
import Grid from './Grid/Grid';
import Bufferring from './Reusable/Bufferring/Bufferring';

const App=(props)=>{

  //redux state starts here......
  const auth_RP=useSelector(state=>state.auth.isAuth);
  const app_buff_RP=useSelector(state=>state.app.bufferring);
  const resolved_RP=useSelector(state=>state.auth.resolved);
  const dispatch=useDispatch();
  //redux state ends here........

 
  //use effect starts here......
  useEffect(()=>{
      dispatch(AuthActions.handleAuthChecking());
  },[]);
  //use effect ends here........



  //GUI man starts here............
  let mainGUI=null;

  if(resolved_RP)
  {
      if(auth_RP)
      {
        mainGUI=(<Grid />);
      }
      else
      {
        mainGUI=(<LoginPage />);
      }
  }
  else
  {
    mainGUI=(<Bufferring />);
  }
  //GUI man ends here..............


  //Gen Bufferring starts here.....
  let buff=null;
  if(app_buff_RP)
  {
    buff=(<Spinner />);
  }
  //Gen bufferring ends............

  //return statement starts here......
  return (
    <React.Fragment>
      {
        buff
      }
           <BrowserRouter>
              {mainGUI}
           </BrowserRouter>
    </React.Fragment>
  );
  //return statement ends here........

}//.....................

export default App;