import React from 'react'

const FTable = (props) => {
    // console.log(props)
    return (
        <>
            <table className="table">
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
                    <td></td>
                </tr>
                </tbody>
            </table>
        </>
    )
};

export default FTable;