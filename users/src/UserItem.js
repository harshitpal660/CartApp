const UsersItem = (props) => {
    
    const { Name,Password,Email } = props.user;
    return (
        <div className="user-item">
            <div style={{fontSize:25}}>Name:{Name}</div>
            <div style={{color:'#777'}}>Email:{Email}</div>
            <div style={{color:'#777'}}>Password:{Password}</div>
        </div>
    );
}

export default UsersItem;