import "./Blog.scss";
import { useState } from "react";
import axios from "axios";
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmitBtn = async () =>{
        if (!title || !content) {
            alert("empty")
            return
        }
        let data = {
          title: title,
          content: content,
          userId: 1,
        }
        let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
        if (res && res.data) {
          let newBlog = res.data
          props.handleAddNew(newBlog)
          console.log("check new blog", newBlog);
        }
        // console.log(">>> check data state", title, content);
    }
  return (
    <>
      <div className="add-new-container">
        <div className="text-add-new">----- Add new blogs -----</div>
        <div className="inputs-data">
          <label>Title: </label>
          <input type="text" value={title} onChange={(event) => {setTitle(event.target.value)}} />
        </div>
        <div className="inputs-data">
          <label>content: </label>
          <input type="text" value={content} onChange={(event) => {setContent(event.target.value)}} />
        </div>
        <button className="btn-add-data" onClick={() => handleSubmitBtn()}>Submit</button>
      </div> 
    </>
  );
};

export default AddNewBlog;
