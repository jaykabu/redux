import React from 'react'
import '../index.css';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

const FTable = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.data)
    }

    const updateNote = () => {
        props.updateItem(props.data)
    }

    const abc = {
        width: "40px",
        textAlign: 'center',
        height: "40px",
    }

    const stuData = props.data;
    return (
       <>
           <tr>
               <td>{stuData.id}</td>
               <td>{stuData.fname}</td>
               <td>{stuData.lname}</td>
               <td>{stuData.email}</td>
               <td>{stuData.schname}</td>
               <td>{stuData.erno}</td>
               <td>{stuData.address}</td>
               <td>{stuData.mobino}</td>
               <button type="button " className="btn btn-light mr-3 ml-2 button" style={abc} onClick={() => {updateNote()}}>
                   <AddIcon/>
               </button>

               <button type="button" className="btn btn-light mr-3 button" style={abc} onClick={() => {
                   deleteNote()
               }}>
                   <ClearIcon/>
               </button>
           </tr>

       </>
    )
};

export default FTable;
