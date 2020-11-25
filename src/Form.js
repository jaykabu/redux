import React , {useState} from 'react'
import FTable from './FTable';
const Form = () => {

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
    const[items , setItems] = useState([])

    const addEvent = () => {
        setExpand(true)
    }

    const btn = () => {
        setExpand(false);
    }


    const inputEvent = (event)=>{
        const{name , value} = event.target

        setData((oldData)=>{
            return {
                ...oldData,
                [name]:value
            }
        })
    }

    const inputSubmit = ()=>{
        setItems((oldData)=>{
            return[...oldData , data]
        })
        console.log(data);
    }

    const onDelete = (id)=>{
        setItems((oldData)=>{
            return oldData.filter((arrelem , index)=>{
                return index !== id;
            })

        })
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
                                          value={data.address} name={"address"} onChange={inputEvent} required/>
                                </div>

                                <div>
                                    <input type="number" className="form-control mt-3" placeholder="Mobile No"
                                           value={data.mobino} name={"mobino"} onChange={inputEvent} required/>
                                </div>

                                <button type="button" className="btn btn-primary mt-3" onClick={inputSubmit}>Submit</button>
                            </form> : null}

                        </div>
                    </div>
                </div>
            </div>

            <div>

            {/*<FTable />*/}
                {items.map((val , index)=>{
                    return <FTable
                        key={index}
                        id={index}
                        firstname={val.fname}
                        lastname={val.lname}
                        email={val.email}
                        schoolname={val.schname}
                        enrollmentno={val.erno}
                        address={val.address}
                        mobileno={val.mobino}
                        deleteItem={onDelete}
                    />

                })}
            </div>
        </>
    )
};

export default Form;