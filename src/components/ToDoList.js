//import { List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';
import React from 'react'
//import InboxIcon from '@material-ui/icons/Inbox'
import Design from './Design';
const ToDoList = (props)=>
{
    return(
        <div style={{width:'800px',height:'500px',margin:'auto',overflow:'hidden'}}>
            {/*<List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
              <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        </List>*/}     
       <div style={{width:'800px',height:'500px',margin:'auto'}}> 
       {props.items.map((item,index)=>{
           return <Design key={index} list={item} onSelect={()=>{
               props.deleteTask(index)
           }} />
           })}</div>
        </div>
    );
};
export default ToDoList;