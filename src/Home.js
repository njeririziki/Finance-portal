import React from 'react';
import { makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Appbar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as Icon from 'react-feather';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

const drawerWidth= 280;
const useStyles= makeStyles(theme=>({
  root:{
    display:'flex'
  },

 
  toolbar: {
    minHeight:60,
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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft : - drawerWidth,
    backgroundColor:'#454545'
  }
})

)
  const HomePg =()=>{
    const classes= useStyles();
    const [open,setOpen] =React.useState(true)
    function drawerOpen(){
       setOpen(true)
    }

    return(
    <div className={classes.root}>
      <div>
      <Appbar 
      style ={{backgroundColor:'#349D63'}}>
        <Toolbar className={classes.toolbar}>
          <Icon.Menu
          onClick={drawerOpen}
          />
          <Typography
          style={{fontSize:30}}>
            Finance Portal
          </Typography>
          <Icon.Search/>
          <InputBase 
          placeholder ="Search"
          >
          </InputBase>
        </Toolbar>
      </Appbar>
      </div>

    <Drawer
    open={open}
    variant='persistent'
    anchor ='left'
    className={classes.drawer}
    >
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
    <main className={classes.content}>
    <div >
    <Typography>
      lorem ipsum
    </Typography>
    </div> 
    </main>
   
      
    </div>
    )
    }
 
 

 export default HomePg;
  