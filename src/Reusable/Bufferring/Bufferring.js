import React from 'react';
import bufferring from '../../Assets/images/loading.gif';

const Bufferring=props=>{

    //style management starts here......
    const divStyle={
        position:'absolute',
        width:'100%',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        zIndex:'500'
    };

    const imgStyle={
        width:'150px',
        height:'150px'
    }

    const textStyle={
        fontWeight:'bold',
        color:'green',
        fontSie:'17px'
    };
    //style management ends here........

    //return statement starts here.....
    return (
        <React.Fragment>
            <div style={divStyle}>
                <img style={imgStyle} className="img-fluid"  src={bufferring} />
                <div style={textStyle}>Please Wait !</div>
            </div>
        </React.Fragment>
    );
    //return statement ends here.......

}//.......................

export default Bufferring;