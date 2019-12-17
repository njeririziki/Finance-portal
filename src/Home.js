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
import IconButton from '@material-ui/core/IconButton'

const drawerWidth= 240;
const useStyles= makeStyles(theme=>({
  root:{
    display:'flex'
  },

 appbar:{
  boxShadow:'none',
  minHeight:80,
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
   width: drawerWidth,
   backgroundColor:'#b9f6ca',
   flexShrink:0
  },
  drawerPaper:{
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    marginLeft : - drawerWidth,
    backgroundColor:'#e1f5fe',
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
  }
})

)
  const HomePg =()=>{
    const classes= useStyles();
    const [open,setOpen] =React.useState(true)
    function drawerOpen(){
       setOpen(true)
    }
    function drawerClose(){
      setOpen(false)
   }

    return(
    <div className={classes.root}>
      
      <CssBaseline/>
      <Appbar 
      style ={{backgroundColor:'#00bfa5'}}
      className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Icon.Menu
          onClick={drawerOpen}
          />
          <Typography
          style={{fontSize:50, fontFamily:'Julius Sans One',
           color:'#000000',fontWeight:20}}
           >
            Finance Portal
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
      <IconButton
      onClick={drawerClose}
      style={{display:'flex',justifyContent:'flex-end'}}>
        <Icon.ChevronLeft/>
      </IconButton>
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
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#e1f5fe',
      marginLeft:-drawerWidth
    }}>
    <Typography
   align='center'
    style={{alignSelf:'center', fontSize:30, fontFamily:'Martel',
    color:'#000000',fontWeight:20}}
    >
      Student Name : Njeri <br/>
      Student Id:01682
    </Typography>
    </div> 
    </main>
   
      
    </div>
    )
    }
 
 

 export default HomePg;
  