import { useHistory } from "react-router-dom";
const NotFound = () => {
    let hisstory = useHistory()
    const Backhome = () => {
        hisstory.push("/")
    }
  return (
    <div>
      <h1>Not Found</h1>
      <button className="btn-warning" onClick={() => Backhome()}>Go to HomePage</button>
    </div>
  );
};

export default NotFound
