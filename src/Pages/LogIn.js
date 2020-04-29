import React, {useContext , useCallback}from 'react'
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button  from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import * as Icon from 'react-feather';
import { makeStyles } from '@material-ui/core';
import {withRouter, Redirect} from 'react-router-dom'
import Firebase from '../config'
import AuthContext, { AuthProvider } from '../AuthContext'

const useStyle= makeStyles(theme=>({
 body:{
    backgroundColor:'#f1f1f1', 
 },

root:{
    marginTop: theme.spacing(8),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column'
},
container:{
    backgroundColor:'#f1f1f1'
},
avatar:{
    marginTop:theme.spacing(3),
    alignSelf:'center',
   width: theme.spacing(7),
   height: theme.spacing(7),
   backgroundColor:'#000000'
},
other:{
marginTop:theme.spacing(3)
},
submit:{
marginTop:theme.spacing(5),
alignSelf:'center',
backgroundColor:'#000000',
fontFamily:'Titillium Web',
color:'#ffffff',
fontSize:20
}
}))
 
const LogIn = ({history}) => {
    const classes =useStyle();
    // const [values,setValues]=React.useState(
    //     {
    //         email:'',
    //         password:''
    //     }
    // )
    // const takeInput=name=>e=>{
    //     setValues({ ...values,[name]:e.target.vaue})
    // }
   
    // const handleLogIn =  useEffect(()=> {
    //     auth.signInWithEmailAndPassword(values.email,values.password).then (()=> 
    //     { history.push('/')
    //     }).catch ( (error)=>
    //     { alert(`${error.message}`)}
    //     ) 
    // },[history, values.email, values.password])
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await Firebase
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
      const  {user} = useContext(AuthContext)
     if (user){
        return <Redirect to = '/' />
     }
    
    return (
       <> 
            <Container  maxWidth='xs'
            className={classes.container}
            >
                <div className={classes.root}>
               
                <Avatar
                className={classes.avatar}>
                <Icon.LogIn/>
                </Avatar>
                
                <form
                 className={classes.other}
                 onSubmit = {handleLogin}>
                    <Textfield
                    variant='outlined'
                    name='email'
                    placeholder='Email'
                    type ='email'
                    fullWidth
                    className={classes.other}
                    required
                    //onChange={takeInput}
                    />
                    <Textfield
                    variant='outlined'
                    name='password'
                    placeholder='Password'
                    type= 'password'
                    fullWidth
                    required
                    className={classes.other}
                   // onChange={takeInput}
                    />
                    <Button
                    className={classes.submit}
                    variant='contained'
                    fullWidth
                    type = 'submit'
                    >
                    Log in 
                    </Button>
                </form>
                <Typography
                 className={classes.other}
                 
                >
                    Create account
                </Typography>
                </div>
            </Container>
      </> 
      );
}
 
export default withRouter(LogIn) ;