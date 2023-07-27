import { useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import AddNewBlog from "./addNewBlog";
const Blog = () => {
  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  // console.log("check data blog", dataBlogs);
  // let newData = [];
  // let hisstory = useHistory()
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let data = dataBlogs.slice(0, 20);
      setNewData(data)
      // console.log("check data", newDataSimple);
    }
  }, [dataBlogs])
  
  const handleAddNew = (blog) => {
    let data = newData
    data.unshift(blog)
    console.log("check data new blog", data);
    setShow(false)
    setNewData(data)

    // hisstory.push("/add-new-blog")
  };

  const handleDelete = (id) =>{
    let data = newData
    data = data.filter(item => item.id !== id)
    setNewData(data)

  }
  return (
    <>
    <Button variant="primary" className="my-3" onClick={handleShow}>
    + Add new blog
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew}/>
        </Modal.Body>
      </Modal>
      {/* <div className="add-new-blog" onClick={handleAddNew}>
        <button>+ Add New Blog</button>
      </div> */}
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title"><span>Title: {item.title}</span> <span onClick={() => handleDelete(item.id)}>X</span></div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}>View Detile</Link>
                </button>
              </div>
            );
          })}
        {isLoading === true && (
          <tr>
            <td
              colSpan="5"
              style={{ textAlign: "center !important", with: "100%" }}
            >
              {" "}
              Loading...
            </td>
          </tr>
        )}

        {isError === true && (
          <tr>
            <td colSpan="5" style={{ textAlign: "center !important" }}>
              {" "}
              Something wrong...{" "}
            </td>
          </tr>
        )}
      </div>
    </>
  );
};

export default Blog;

