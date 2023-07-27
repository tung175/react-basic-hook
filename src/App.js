import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useEffect, useState } from "react";
import Todo from "./views/Todo";
import Covid from "./views/covid";
import { CountDown, UseNewCountDown } from "./views/countdown";
import Blog from "./views/blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetileBlog from "./views/detailBlog";
import AddNewBlog from "./views/addNewBlog";
import NotFound from "./views/notfound";
import YoutubeSearch from "./views/YoutubeSearch";
const App = () => {
  const [name, setName] = useState("Tung");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching YT Channel", type: "tung" },
    { id: "todo2", title: "Doing homework", type: "duong" },
    { id: "todo3", title: "Playing game", type: "tung" },
    { id: "todo4", title: "reading book", type: "tung" },
  ]);

  useEffect(() => {
    console.log("run effect");
  }, []);
  const handleEventClick = (event) => {
    if (!address) {
      alert("emtpy input");
      return;
    }
    //hook not merge state
    //...spread syntax array js
    let newTodo = { id: Math.floor(Math.random() * 10000) + 1, title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodos = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  const onTimeUp = () => {
    alert("Time Up");
  };
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1>Hello world with React and {name}!</h1>

          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route exact path="/">
            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown onTimeUp={onTimeUp} />
            <span>------------------</span>
            <UseNewCountDown onTimeUp={onTimeUp} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={"All todos"}
              deleteDataTodos={deleteDataTodos}
            />

            <Todo
              todos={todos.filter((item) => item.type === "tung")}
              title={"Tung todos"}
            />
            <input
              type="text"
              value={address}
              onChange={(event) => handleOnchangeInput(event)}
            />

            <button type="button" onClick={(event) => handleEventClick(event)}>
              Click me
            </button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetileBlog />
          </Route>
          <Route path="/add-new-blog">
            <AddNewBlog/>
          </Route>
          <Route path="/YT">
            <YoutubeSearch/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
