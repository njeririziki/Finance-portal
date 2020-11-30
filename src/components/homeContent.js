import React from 'react';
import Typography from '@material-ui/core/Typography'
import Avatar from 'react-avatar';
import {makeStyles} from '@material-ui/styles';
import Njeri from './njeri.jpg'
import Box from '@material-ui/core/Box';
import Firebase from '../config';
import FileUploader from 'react-firebase-file-uploader'

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
  const [image,setImage] = React.useState(null)
  const [url,setUrl] =React.useState('')

  const handleUploadSuccess=(filename)=>{
    setImage(filename)
  Firebase.storage().ref('images').child(filename)
  .getDownloadURL()
  .then(url=> setUrl(url))
  }
    return(
        <div >
      
          <Typography
            align='center'
          style={{alignSelf:'center', fontSize:40,
          fontFamily:'Julius Sans One',
          color:'#000000',fontWeight:20}}
          >
            The financial portal
          </Typography>
          <Avatar
          align='center'
          alt="Njeri" 
          src= {Njeri}
          variant='circle'
          className={classes.largeAvatar}
          />
          <br/>
           {image? <Avatar src={url}/> :
           <FileUploader
            accept = 'image/*'
            name='profile'
           storageRef={Firebase.storage().ref('images')}
           onUploadError={console.log('Error')}
           onUploadSuccess={handleUploadSuccess}
             />}
               
          <br/>    
        <Typography
        align='center'
          style={{alignSelf:'center', fontSize:30,
          fontFamily:'Julius Sans One',
          color:'#000000',fontWeight:20}}
          >
            Student's Name :Kariuki Njeri <br/>
            Student's Id:ECII/01682 <br/>
            Student's Class: Four Pearl
          </Typography>
    </div>
    )
}
    

 export default HomeContent;

// <img src={profile} alt=""/>
/**  */