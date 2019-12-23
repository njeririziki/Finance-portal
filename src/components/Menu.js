import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const useStyle= makeStyles(theme=>({
root:{
    display:'flex',
     flexDirection:'row',
     justifyContent:'center'
},
menuPaper:{
   marginRight:theme.spacing(2)
}

}
))


const PayMenu =()=>{
    const classes= useStyle()
    return(
        <div className={classes.root}>
             <Button
       variant='contained'
       style ={{backgroundColor:'#26a69a'}}
       >
            top up via:   
       </Button> 

            <MenuList
            className={classes.menuPaper}>
                <MenuItem>M ~ pesa</MenuItem>
                <MenuItem>iPay</MenuItem>
                <MenuItem>PesaPal</MenuItem>
                
            </MenuList>
        </div>
    )
}

export default PayMenu;