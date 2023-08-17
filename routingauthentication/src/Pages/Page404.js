import gif from "../Images/page404.gif"
export const Page404 = ()=>{
    return(
        <div style={{textAlign:'center'}}>
            <h2>404</h2>
            <p>Page not found</p>
            <img src={gif}></img>
        </div>
    )
}