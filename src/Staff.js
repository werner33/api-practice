import React, {useState, useEffect } from 'react';

function Staff() {

    const [staff, setStaff] = useState([]);

    useEffect(() => {
        fetch('https://codewars-tracker-be.herokuapp.com/users/staff')
        .then( res => res.json())
        .then(data => {
            setStaff(data)
        })
      }, []);
   
    return (
        <div>
            {staff.length && staff.map((staffMember) => {
                return (
                    <div>
                        {staffMember.name}
                    </div>
                )
            })}
        </div>
    );
}

export default Staff;