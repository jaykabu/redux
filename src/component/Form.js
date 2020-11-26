import React, {useEffect, useState} from 'react'
import FTable from './FTable';

const Form = () => {

    const [data, setData] = useState({
        id: null,
        fname: '',
        lname: '',
        email: '',
        schname: '',
        erno: '',
        address: '',
        mobino: ''
    })
    const [expand, setExpand] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(items)
        // console.log('items', items)
    }, [items]);

    const addEvent = () => {
        setExpand(true)
    }

    const btn = () => {
        setExpand(false);
    }

    const inputEvent = (event) => {
        const {name, value} = event.target

        setData((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }

    const inputSubmit = () => {
        if (data.id === null) {
            const stuid = (items.length + 1);
            const newdata = Object.assign(data, {id: stuid})
            setItems((newdata) => {
                return [...newdata, data]
            })
        } else {
            pushToArray(items, data)

            function pushToArray(arr, obj) {
                const index = arr.findIndex((e) => e.id === obj.id);
                arr[index] = obj;
            }
        }
        setData({
            id: null,
            fname: '',
            lname: '',
            email: '',
            schname: '',
            erno: '',
            address: '',
            mobino: ''
        })
    }

    const onDelete = (data) => {
        if (data) {
            pushToArray(items, data)

            function pushToArray(arr, obj) {
                const index = arr.findIndex((e) => e.id === obj.id)
                arr.splice(index, 1)
                setItems((items) => {
                    return [...items]
                })
            }
        }
    }

    const onUpdate = (data) => {
        setData(data);
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

                            {expand ? <form>
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
                                          placeholder="Address"
                                          value={data.address} name={"address"} onChange={inputEvent} required/>
                                </div>
                                <div>
                                    <input type="number" className="form-control mt-3" placeholder="Mobile No"
                                           value={data.mobino} name={"mobino"} onChange={inputEvent} required/></div>
                                <button type="button" className="btn btn-primary mt-3" onClick={inputSubmit}>
                                    Submit
                                </button>
                            </form> : null}
                        </div>
                    </div>
                </div>
            </div>

            <div>
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
                    {items.map((val, index) => {
                        return <FTable
                            key={index}
                            data={val}
                            deleteItem={onDelete}
                            updateItem={onUpdate}
                        />
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Form;