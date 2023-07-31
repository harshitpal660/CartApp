import { useEffect, useState } from "react";
import {firestore} from '../Firebase'
import { useParams } from "react-router-dom";
function PostDetail() {
  const [post,setPost] = useState({});
  const {postId} = useParams();
  useEffect(()=>{
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot)=>{
        console.log(snapshot.data())
        setPost(snapshot.data())
      });
  },[]);
    return (
      <div className="post-detil">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;