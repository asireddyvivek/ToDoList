//import { Button, TextField } from '@material-ui/core';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//import Icon from '@material-ui/core/Icon';
import React,{useState} from 'react';
import './Design.css';
//import { makeStyles } from '@material-ui/core/styles'
/*const useStyles = makeStyles({
    root:{
        border:10,
        height:30,
        borderRight:0,
        background:'transparent',
        padding:1,

    },
    btn:{
        height:50,
        borderLeft:0,
    
    },
});
/*function TextFieldStyled()
{
    const classes = useStyles();
    return <TextField type="text" variant="filled" label="Task" size="small" className={classes.root}>Test</TextField>
}
function ButtonStyled()
{
    const classes = useStyles();
    return <Button variant="outlined" className={classes.btn}>btn</Button>
}*/
function Form(props)
{
    const [data,setData] =  useState("");
    const saveData=(event)=>
    {
        const name = event.target.value;
        setData(name);
    }
    const sendData=(event)=>
    {
        if(data==="")
            alert("Textfield cannot be empty");
        //event.preventDefault();
        else
        {
        const item={
           id:"t"+(Math.ceil(Math.random()*100)),
           name:data,
        };
        const enteredData={...item};
        props.onSaveTask(enteredData);
        setData('');
        }
    }
    return(
        <div>
            <br></br>
            <div>
            {/*<TextField className="input" onChange={saveData} variant="outlined" label="Task" style={{'border-right':'none'}}  value={data}/>*/}
            <div style={{width:'500px',height:'20px',margin:'auto',marginBottom:'100px'}}>
            <input type="text"
             style={{
                width:'50%',
                height:'50%',
                padding:'10px',
                fontSize:'20px',
                borderRight:'none',
                }}
             value={data} onChange={saveData}/>
            <button
             style={{
                width:'20%',
                height:'50%',
                padding:'10px',
                fontSize:'18px',
                background:'transparent',
                cursor:'pointer',
                color:'white',
                border:'none',
                borderRadius:'0px 5px 5px 0px'
                }} 
             onClick={sendData}>
                ADD<i class="fa fa-plus-circle" style={{marginLeft:'10px'}} aria-hidden="true"></i>
            </button>
            </div>
            {/*<Button className="btn" variant="outlined"   size="large" style={{'backgroundColor':'black','color':'white'}} onClick={sendData}>add<Icon>add_circle</Icon></Button>
            */}</div>
        </div>
    );
};
export default Form;