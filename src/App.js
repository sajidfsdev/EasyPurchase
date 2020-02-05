import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//pages imports......
import LoginPage from './Pages/Login/Login';
import Grid from './Grid/Grid';
import Bufferring from './Reusable/Bufferring/Bufferring';

const App=(props)=>{

  //redux state starts here......
  const auth_RP=useSelector(state=>state.auth.isAuth);
  const resolved_RP=useSelector(state=>state.auth.resolved);
  //redux state ends here........

 
  //use effect starts here......
  useEffect(()=>{

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

  //return statement starts here......
  return (
    <React.Fragment>
           <BrowserRouter>
              {mainGUI}
           </BrowserRouter>
    </React.Fragment>
  );
  //return statement ends here........

}//.....................

export default App;