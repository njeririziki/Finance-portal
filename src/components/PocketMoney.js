import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles';

import PayMenu from './Menu'

const useStyles = makeStyles(theme => ({
    root:{
     
      
    },
}))

const PocketMoney =()=>{
    const classes =useStyles();

    return( 
   <div className={classes.root}>
   <Typography
      align='center'
     style={{alignSelf:'center', fontSize:40,
     fontFamily:'Julius Sans One',
    color:'#000000',fontWeight:20}}
    >
     <u> Pocket Money  </u> 
    </Typography>
    <Typography
    align='center'
    style={{alignSelf:'center', fontSize:30,
     fontFamily:'Lilita+One',
    color:'#000000',fontWeight:20}}
    >   <br/>
      Balance:1,000 Ksh <br/>
                   Limit : 5,000 Ksh <br/>
        Outstanding Amount:2,000 Ksh <br/>
      
       <br/><br/>
       <Container>
      
       <PayMenu/>  
       </Container>
      
    </Typography>
    
    </div>)
}
export default PocketMoney;