import * as Types from '../Constants/App';

const initialState={
    bufferring:false
};

const AppReducer=(state=initialState,action)=>{

    //switch starts here.....
    switch(action.type)
    {
        case Types.STARTAPPBUFFERRING:
            return {
                ...state,
                bufferring:true
            };
            break;


        case Types.STOPAPPBUFFERRING:
            return {
                ...state,
                bufferring:false
            };
            break;
    }
    //switch ends here........

    return state;
}//.............................................

export default AppReducer;