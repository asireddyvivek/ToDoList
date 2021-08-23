import './Design.css';
import React from 'react';
import {useState} from 'react';
function Design(props)
{

    const [list,setList] = useState(props.list);
    Object.keys(list).map(function(keyName,keyIndex){
        //console.log(list[keyName]+" "+props.list.id);
    })
    var arr = list;
    console.log(Object.entries(arr))
    const removeTask=(event)=>{
        var id = event.target.attributes.getNamedItem('idValue').value;
        console.log(id);
    arr = arr.filter((item)=>{
    return item[0]!=id;})
        console.log(Object.values(arr));

        //arr.push(...list.id);
        //console.log(typeof list);
        //console.log(Object.entries(list));
        Object.entries(list).map(function(keyName,keyIndex){
            //console.log(keyName);
        })
        //console.log(arr);
    };
    return(
        <div style={{width:'80%',height:'10%',margin:'auto',padding:'20px',background:'red',overflow:'visible'}}>
            <div style={{width:'90%',background:'orange',padding:'10px',marginLeft:'2%',marginRight:'2%',border:'1px solid white'}}>
            <span style={{width:'50%',fontSize:'15px',margin:'auto'}}>{props.list.name}</span>
            <span style={{width:'20%',fontSize:'15px',float:'right'}}><i class="fa fa-trash" idValue={props.list.id} onClick={props.onSelect}></i></span>
            {/*<span style={{width:'400px',float:'left'}}>{props.list.name}</span>
            <i style={{width:'200px',padding:'10px 10px'}}class="fa fa-trash" onClick={removeTask} style={{'margin-left':'300px'}}></i>*/}
            </div>
        </div>
    );
};
export default Design;