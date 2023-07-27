import { useParams, useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss"
const DetileBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const {
    data: dataBlogDetile,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
//   console.log(dataBlogDetile);
  const handleBackData = () => {
    history.push("/blog");
    alert("click")
  };

  return (
    <>
      <div>
      <button onClick={() => handleBackData}> Back</button>
        {/* <span >&lt;-- Back</span> */}
      </div>
      <div className="blog-detail">
        {dataBlogDetile && 
          <>
            <div className="title">Blog {id} --- {isLoading === true ? 'Loading Data...' : dataBlogDetile.title}</div>
            <div className="content">{dataBlogDetile.body}</div>
          </>
        }
      </div>
    </>
  );
};

export default DetileBlog;
