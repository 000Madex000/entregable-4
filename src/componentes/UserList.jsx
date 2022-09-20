import React from 'react';

const UserList = ({person ,selectPerson,getPerson}) => {


const deletePerson=(id)=>{
//  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
//  .then(()=>getPerson())
}

    return (
        <div>
            <div className="box_UserList">
                <div className="box_user">
                    <ul>
                        {
                            person.map(person=>(
                                <li className='box_date' key={person.id}> <div>
                                    <b>{person.first_name} {person.last_name}</b> 
                                   <div className='date'><b>email: {person.email}</b></div>
                                   <div className='date'><b>birthday:{person.birthday}</b></div>
                                </div>
                                <div>
                                    <button onClick={()=>selectPerson(person)}>edit</button>
                                    <button onClick={deletePerson(person.id)}>delete</button>
                                </div>
                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserList;