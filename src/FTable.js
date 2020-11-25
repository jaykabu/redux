import React from 'react'

const FTable = (props) => {
    // console.log(props)

    const deleteNote = ()=>{
        props.deleteItem(props.id)
    }

    return (
       <>
           <div className="container-fluid nav_bg">
               <div className='row'>
                   <div className='col-10 mx-auto'>

                       <table className="table mt-5">
                           <thead>
                           <tr>
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
                               <td>{props.firstname}</td>
                               <td>{props.lastname}</td>
                               <td>{props.email}</td>
                               <td>{props.schoolname}</td>
                               <td>{props.enrollmentno}</td>
                               <td>{props.address}</td>
                               <td>{props.mobileno}</td>
                               <button type="button " className="btn btn-light mr-3">Update</button>
                               <button type="button" className="btn btn-light mr-3" onClick={deleteNote}>Delete</button>
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