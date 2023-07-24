// import React from 'react'
import UsersItem from "./UserItem";
const UsersList = (props) => {
    // console.log(props)
    const { users } = props;
    return (
        <div className="UsersList">
            {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/> */}
            {users.map((user) => {
                // console.log(user)
                return(<UsersItem
                    user = {user}
                    key={user.id}
                />)
                
            })}
        </div>

    );
}

export default UsersList;