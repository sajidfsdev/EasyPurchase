import React from 'react';
import bufferring from '../../Assets/images/loading.gif';

const Bufferring=props=>{

    //style management starts here......
    const divStyle={
        width:'100%',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    };

    const imgStyle={
        width:'200px',
        height:'200px'
    }
    //style management ends here........

    //return statement starts here.....
    return (
        <React.Fragment>
            <div style={divStyle}>
                <img style={imgStyle} className="img-fluid"  src={bufferring} />
            </div>
        </React.Fragment>
    );
    //return statement ends here.......

}//.......................

export default Bufferring;