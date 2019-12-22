import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root:{
     
      
    },
}))

const PocketMoney =()=>{
    const classes =useStyles();

    return( 
   <div className={classes.root}>
    <Container>
    <Typography
    align='center'
    style={{alignSelf:'center', fontSize:30,
     fontFamily:'Lilita+One',
    color:'#000000',fontWeight:20}}
    >   Pocket Money <br/>
      Balance:1,000 Ksh <br/>
                   Limit : 5,000 Ksh <br/>
        Outstanding Amount:2,000 Ksh <br/>
       top up  via: <br/>
       <Button
       variant='contained'
       style={{backgroundColor:'#349D63'}}
       >M~pesa</Button>
    </Typography>
    </Container>
    </div>)
}
export default PocketMoney;