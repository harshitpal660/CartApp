const Gallery=(props)=>{
    const gallerylist = props.gallery;
    return <div style={{color:"white"}} className="appScreen">
        {gallerylist.map((item)=>{
            return <div className="AppItem"><img src={item.img}></img></div>
        })}
    </div>
}
export default Gallery;