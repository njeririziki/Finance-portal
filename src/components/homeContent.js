import React from 'react';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/styles';
import profile from './user.svg';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root:{
   
    
  },
  avatar: {
    margin :'50%,50%,50%,50%',
    
    border: '2px solid #000'
  },
  largeAvatar:{
          display:'flex',
          flexDirection:'row',
          alignSelf:'center',
          justifyContent:'center',
         
  }
  
}))


const HomeContent =()=>{
  const classes =useStyles();
    return(
        <div >
      
       <Typography
      align='center'
     style={{alignSelf:'center', fontSize:30,
     fontFamily:'Julius Sans One',
    color:'#000000',fontWeight:20}}
    >
      The  student
    </Typography>
          <Box 
          className={classes.largeAvatar}
            >
          <img src={profile} alt=""/>
             
          </Box>      
   <Typography
   align='center'
    style={{alignSelf:'center', fontSize:30,
     fontFamily:'Courgette',
    color:'#000000',fontWeight:20}}
    >
      Student's Name :Kariuki Njeri <br/>
      Student's Id:Ecii/01682 <br/>
      Student's Class: Four Pearl
    </Typography>
    </div>
    )
}
    

 export default HomeContent;

// <img src={profile} alt=""/>
/**    <Avatar
          align='center'
          alt="Njeri" 
          src="/static/images/avatar/1.jpg"
          variant='circle'
          className={classes.largeAvatar}
          /> */