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
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className='col-10 mx-auto'>

                        <table className="table mt-5">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">SchoolName</th>
                                <th scope="col">EnrollmentNo</th>
                                <th scope="col">Address</th>
                                <th scope="col">MobileNo</th>
                                <th scope="col">action</th>
                            </tr>
                            </thead>
                            <tbody>
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
                            </tbody>
                       </table>
                   </div>
               </div>
           </div>
       </>
    )
};

export default FTable;
