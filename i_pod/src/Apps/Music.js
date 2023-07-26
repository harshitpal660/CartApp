import YouTube from 'react-youtube';
const Music=(props)=>{
    const musiclist = props.music;
    return <div style={{color:"white"}} className="appScreen">
    {musiclist.map((item)=>{
        return <div className="AppItem"><YouTube videoId={item.id} className='appiteminner' key={item.id}/></div>
    })}
</div>
}

export default Music;