import React from "react";

const ContactOptions = (props) => {
    const data = props.data;
    const styles={
        listItem:{
            backgroundColor:data.bgColor,
            height:'60px',
            display:'flex',
            justifyContent:'center'
        }
    }
    return (
        <div className="listItem" style={styles.listItem}>
            {/* <img src={data.icon} alt={data.name}> */}
            <img src={data.icon} alt={data.name}/>
            <a href={data.link} target="_blank">{data.name}</a>
        </div>
    );
}

export default ContactOptions;