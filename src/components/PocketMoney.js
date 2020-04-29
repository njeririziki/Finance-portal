import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles';
import Firebase from '../config';
import PayMenu from './Menu'

const useStyles = makeStyles(theme => ({
    root:{
     
      
    },
}))

const PocketMoney =()=>{
    const classes =useStyles();
     const [amount,setAmount] = React.useState({bal:'', amnt:''});

     React.useEffect(()=>{
      const pocketBalance = Firebase.firestore().collection('Njeri')
      .onSnapshot((snapshot)=>{
        const account={ bal:'',amnt:'' }
        snapshot.docs.forEach(doc=>{
                 account.bal=doc.data().balance 
                  account.amnt=doc.data().amount
          
          setAmount(account) 
        })
      })
      
            
            return ()=>pocketBalance()
      })
    

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
      Balance: <br/>
                   Limit : 5,000 Ksh <br/>
                   Account Balance: {amount.bal} Ksh <br/>
                  Top up Amount: { amount.amnt} Ksh <br/>
      
       <br/><br/>
      
    </Typography>
    <Container>
      <PayMenu/>  
    </Container>
    
    </div>)
}
export default PocketMoney;