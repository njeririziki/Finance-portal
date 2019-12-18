import React from 'react';
import { makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as Icon from 'react-feather';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import profile from './user.svg'

const drawerWidth= 260;
const appbarHeight= 80;
const useStyles= makeStyles(theme=>({
  root:{
    display:'flex'
  },

 appbar:{
  boxShadow:'none',
  Height:appbarHeight,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  
 },
 appbarShift:{
  width : `calc (100% - ${drawerWidth}px)`,
  marginLeft:-drawerWidth,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
 },
  toolbar: {
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center'
  },
  searchicon:{
    marginRight: theme.spacing(2),
  },
  drawer:{
    zIndex:-1,
    width: drawerWidth,
   flexShrink:0
  },
  drawerPaper:{
    marginTop:appbarHeight,
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    marginLeft : - drawerWidth,
    minHeight: 85,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }), 
  },
  contentShift:{
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    backgroundColor:'#F2F2F2'
  },
   photo:{
   margin :'0%,0%,0%,0%',
   width:150,
   height:150,
   border: '2px solid #000'
   }
})

)
  const HomePg =()=>{
    const classes= useStyles();
    const [open,setOpen] =React.useState(false)
    function drawerOpen(){
       setOpen(true)
    }
    function drawerClose(){
      setOpen(false)
   }
   function toggleDrawer(){
     setOpen(!open)
   }

    return(
    <div className={classes.root}>
      
      <CssBaseline/>
      <div>
      <Appbar 
      style ={{backgroundColor:'#26a69a'}}
      className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
       
          <IconButton
          onClick={toggleDrawer} >
         {open?<Icon.X/>:<Icon.Menu/>}
          </IconButton>
          
          <Typography
          style={{fontSize:50, fontFamily:'Julius Sans One',
           color:'#000000',fontWeight:20}}
           >
            Students' Finance Portal
            </Typography>
         <Button
         variant='contained'
         style ={{backgroundColor:'#b0bec5',fontSize:15, 
         fontFamily:'Julius Sans One',
           color:'#000000',fontWeight:20}}
           >
         >
           Log out
           </Button>
         
        </Toolbar>
      </Appbar>
      </div>
     
      
   <div>
   <Drawer
    open={open}
    variant='persistent'
    anchor ='left'
    className={classes.drawer}
    classes={{
      paper: classes.drawerPaper,
    }}
    >
        <Icon.ChevronLeft
         onClick={drawerClose}
         style={{display:'flex',justifyContent:'flex-end',minHeight:48}}
        />
      
      <Typography
          style={{fontSize:30, fontFamily:'Martel',
           color:'#000000',fontWeight:20}}
           >  
          </Typography>
     <Divider/>
     <List>
    {['Tuition Balance','Pocket Money','Cocurriculars'].map((text)=>(
      <ListItem
      button
      key={text}
      style={{minHeight:30,backgroundColor:'#fffff'}}
      >
        <ListItemText
        primary ={text}
        /> 
         <Divider/>
      </ListItem>
      
    ))}
    
     </List>  
     
    </Drawer>
   </div>
   
    <main className={classes.content}>
    <div 
    style={{
      display:'flex',
      minHeight:'100vh',
      flexDirection:'column',
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#fafafa',
      marginLeft:-drawerWidth,
      
    }}>
       <p 
        style={{alignSelf:'center',fontSize:40,
         fontFamily:'Julius Sans One'}}
        > 
       Student's profile
       </p> 
      
       <div className={classes.photo}
      style={{alignSelf:'center'}}
      >
        <img src={profile} alt=""/>
      
      </div>
    
      <br/>
    <Typography
   align='center'
    style={{alignSelf:'center', fontSize:30, fontFamily:'Courgette',
    color:'#000000',fontWeight:20}}
    >
      Student's Name : Njeri <br/>
      Student's Id:01682 <br/>
      Student's Class: Form Three
    </Typography>
    </div> 
    </main>  
    </div>
    )
    }
 
 

 export default HomePg;
  