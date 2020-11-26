import React from 'react'

const FTable = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.data)
    }

    const updateNote = () => {
        props.updateItem(props.data)
    }

    const stuData = props.data;
    return (
        <>
            {/*<div className="container-fluid nav_bg">*/}
            {/*    <div className='row'>*/}
            {/*        <div className='col-10 mx-auto'>*/}

                        <tr>
                                <td>{stuData.id}</td>
                                <td>{stuData.fname}</td>
                                <td>{stuData.lname}</td>
                                <td>{stuData.email}</td>
                                <td>{stuData.schname}</td>
                                <td>{stuData.erno}</td>
                                <td>{stuData.address}</td>
                                <td>{stuData.mobino}</td>
                                <button type="button " className="btn btn-light mr-3" onClick={()=>{updateNote()}}>Update
                                </button>
                                <button type="button" className="btn btn-light mr-3" onClick={()=>{deleteNote()}}>Delete
                                </button>
                            </tr>
           {/*         </div>*/}
           {/*    </div>*/}
           {/*</div>*/}
       </>
    )
};

export default FTable;
