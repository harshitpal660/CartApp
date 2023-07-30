import { useState } from "react";
import { firestore } from "../Firebase";
import { useFormInput } from "../hooks";
function CreatePost() {
  const title = useFormInput('');
  const content = useFormInput('');
  const subTitle =useFormInput('');
  function handleSubmit(e){
    e.preventDefault();

    console.log('title',title)
    console.log('subtitle',subTitle)
    console.log('content',content)

    firestore.collection('posts').add({
      title:title.value,
      content:content.value,
      subTitle:subTitle.value,
      creatAt:new Date()
    })
  }
    return (
      <div className="create-post">
        <h1>CreatePost</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input {...title}/>
          </div>
          <div className="form-field">
            <label>Sub Title</label>
            <input {...subTitle}/>
          </div>
          <div className="form-field">
            <label>Content</label>
            <textarea {...content}/>
          </div>
          <button className="create-post-btn">Create Post</button>
        </form>
      </div>
    );
  }
  
  export default CreatePost;