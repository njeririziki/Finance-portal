import React from 'react';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { nominalTypeHack } from 'prop-types';

const useStyle= makeStyles(theme=>({
root:{
    display:'flex',
     flexDirection:'row',
     justifyContent:'center'
},
menuPaper:{
   marginRight:theme.spacing(2),
  
},
paper:{
    width:'200px',
    boxShadow:'none'
}
}
))


const PayMenu =()=>{
    const [anchorEl,setAnchorEl]= React.useState(null)

    const openMenu = event =>{
        setAnchorEl(event.currentTarget)
    }
    const closeMenu=()=>{
        setAnchorEl(null)
    }
    const classes= useStyle()
    return(
        <div className={classes.root}>
            <Button
       variant='contained'
       onClick={openMenu}
       style ={{backgroundColor:'#26a69a'}}
       >
            top up via:   
       </Button> <br/>
         <br/>
         <Menu
          id='payMenu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClick={closeMenu}
          anchorOrigin={{vertical:'bottom',horizontal:'right'}}
          
          className={classes.menuPaper}
         >
        
         <MenuItem
            style ={{backgroundColor:'#4caf50'}}   
                >Lipa na M ~ pesa
                </MenuItem>
                <MenuItem 
           
                >iPay
                </MenuItem>
                <MenuItem
               
                >
                    PesaPal
                </MenuItem>
       
                
           
         </Menu>
            
        </div>
    )
}

export default PayMenu;

/**
 *  
 *  style ={{backgroundColor:'#ffe0b2'}}    
 *  style ={{backgroundColor:'#ffebee'}}
 *  <MenuList
         className={classes.paper}>
           </MenuList>
               
 */