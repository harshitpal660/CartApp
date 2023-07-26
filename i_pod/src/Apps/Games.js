const Games=(props)=>{
    console.log(props)
    const gamelist = props.games;
    console.log(gamelist)
    return <div style={{color:"white"}} className="appScreen">
        {gamelist.map((item)=>{
            return <div className="AppItem"><img src={item.img} className="appiteminner"></img></div>
        })}
    </div>
}

export default Games;