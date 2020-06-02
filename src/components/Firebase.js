import React from 'react'
import Firebase from '../config';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Container from '@material-ui/core/Container'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// Just practice for the Everydime expense parts
//delete it when ready to produce
const useStyles = makeStyles(theme=>({
  root:{
    marginTop: theme.spacing(8),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    backgroundColor:'424242',
    width : 700,
},


  table: {
    width : 350,
   
  },
  input:{
    border:'none'
  },
}));

const Pocket = () => {
    const [amount,setAmount] =React.useState({ bal:'',amnt:''})
     const classes = useStyles();

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
    
  
    // const pocketDoc = Firebase.firestore().collection('Njeri').doc('pm')
    // pocketDoc.set({
    //     balance:500,
    //     limit: 2500
    //   }) 
    //   .then((doc)=> {
    //      alert(`Data added successfully`)
            
    // })
    //   .catch((error)=> console.error('Error adding data',error))
    // },[])
    // React.useEffect(()=>{
    //     Firebase.firestore().collection('Njeri').doc('pm ')
    //     .get()
    //     .then((doc)=>{
    //         if (doc.exists){
    //             const amount = doc.map(doc.data()) ;
    //           console.log(doc.data())
    //           setAmount(amount)
    //         }else{
    //             console.log('This is the data')
    //         }
            
          
    //     })

    // },[])
 
 
  return (
   <div className={classes.root}>
<Container component={Paper}>
  
  <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Activity</TableCell>
            <TableCell align="right">Budget</TableCell>
            <TableCell align="right">Expense</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow>
            <TableCell >6.00am</TableCell>
            <TableCell >Breakfast</TableCell>
          <TableCell >{amount.bal}</TableCell>
          <TableCell >{amount.amnt}</TableCell>
       </TableRow>
         
       
        </TableBody>
      </Table>
      </Container>


   </div>
  );
  }

 export default Pocket;