import Posts  from "./Posts/Posts.js";
import Comments  from "./Comments/Comments.js";
import Albums  from "./Albums/Albums.js";
import Photos  from "./Photos/Photos.js";
import Todos  from "./Todos/Todos.js";
import Users  from "./Users/Users.js";

import './App.css';

const App = () => {

  return (
    <div className="App">
      <Posts/>
      <Comments/>
      <Albums/>
      <Photos/>
      <Todos/>
      <Users/>
    </div>
  );
}



export default App;