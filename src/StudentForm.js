import React, {useState} from 'react'
import './index.css';

const StudentForm = () => {

    const [studentList , setStudentList] = useState([
        {
            id:1,
            firstname:'dhruv',
            lastname:"patel",
            email:'dhruv@gmail.com',
            schoolname:'sd jain',
            enrollmentno:156080316001,
            address:'vesu',
            mobileno:9632587410
        },
        {
            id:2,
            firstname:'parth',
            lastname:"kumar",
            email:'parth@gmail.com',
            schoolname:'sardayatan',
            enrollmentno:156080316002,
            address:'katargam',
            mobileno:9836523710
        },
        {
            id:3,
            firstname:'malkesh',
            lastname:"dalia",
            email:'malkesh@outlook.com',
            schoolname:'gurukul',
            enrollmentno:156080316003,
            address:'mahidhrpura',
            mobileno:8856445396
        },
        {
            id:4,
            firstname:'smit',
            lastname:"patel",
            email:'smit@yahoo.com',
            schoolname:'sardayatan',
            enrollmentno:156080316004,
            address:'bhatar',
            mobileno:9849964996
        },
        {
            id:5,
            firstname:'hardik',
            lastname:"baranpuri",
            email:'hardik@gmail.com',
            schoolname:'rayan',
            enrollmentno:156080316005,
            address:'vip road',
            mobileno:9876324518
        }
    ])

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        schname: '',
        erno: '',
        address: '',
        mobino: ''
    })

    const [expand, setExpand] = useState(false);



    const inputEvent = (event) => {
        const {name, value} = event.target;

        setData((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }


    const addEvent = () => {
        setExpand(true)
    }

    const btn = () => {
        setExpand(false);
    }

    const inputSubmit = (e)=>{
        console.log('ok' , e)
        // const sid = (studentList.length + 1)
        e.preventDefault()
        setStudentList((oldData)=>{
            return[...oldData , data]
        })
        console.log(data);
    }

    const itemDelete = ()=>{

    }

    return (
        <>
            <div>
                <button type="button" className="btn btn-primary add-button" onClick={addEvent}
                        onDoubleClick={btn}>Add
                </button>
                <div>
                    <h1 className='d-flex justify-content-center'>
                        Student Form
                    </h1>
                    <hr/>

                </div>
                <div className="container-fluid nav_bg">
                    <div className='row'>
                        <div className='col-10 mx-auto'>

                            {expand ? <form onSubmit={(value)=>inputSubmit(value)}>

                                <div>
                                    <input type="text" className="form-control mt-3" placeholder="First name"
                                           value={data.fname} name={"fname"} onChange={inputEvent} required/>
                                </div>

                                <div>
                                    <input type="text" className="form-control mt-3" placeholder="Last name"
                                           value={data.lname} name={"lname"} onChange={inputEvent} required/>
                                </div>

                                <div>
                                    <input type="email" className="form-control mt-3" placeholder="Email"
                                           value={data.email} name={"email"} onChange={inputEvent} required/>
                                </div>

                                <div>
                                    <input type="text" className="form-control mt-3" placeholder="School Name"
                                           value={data.schname} name={"schname"} onChange={inputEvent} required/>
                                </div>

                                <div>
                                    <input type="number" className="form-control mt-3" placeholder="Enrollment No"
                                           value={data.erno} name={"erno"} onChange={inputEvent} required/>
                                </div>

                                <div className="form-group mt-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                          value={data.address} name={"address"} onChange={inputEvent} required/>
                                </div>

                                <div>
                                    <input type="number" className="form-control mt-3" placeholder="Mobile No"
                                           value={data.mobino} name={"mobino"} onChange={inputEvent} required/>
                                </div>

                                <button type="button" className="btn btn-primary mt-3" onClick={()=>inputSubmit}>Submit</button>
                            </form> : null}

                        </div>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
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


                {studentList.map((item, index) => {
                    // console.log(item);
                    return (
                        <tr key={index} id={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.schoolname}</td>
                            <td>{item.enrollmentno}</td>
                            <td>{item.address}</td>
                            <td>{item.mobileno}</td>

                            <div>
                                <button type="button" className="btn btn-light mr-3">Update</button>
                                <button type="button" className="btn btn-light" onClick={itemDelete}>Delete</button>
                            </div>

                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
};

export default StudentForm;