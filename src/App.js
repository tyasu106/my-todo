import { All } from "./components/All";
import { Todo } from "./components/Todo";
import { End } from "./components/End";
import { useState } from "react";


function App() {
  const [tab, setTab] = useState('all')
  return (
    <div>
      <h1>Hello React</h1>
      <header>
        <ul>
          <li onClick={() => {setTab('all')}}>すべて</li>
          <li onClick={() => {setTab('todo')}}>作業中</li>
          <li onClick={() => {setTab('end')}}>完了</li>
        </ul>
      </header>
      <hr />
      {
        (() => {
          if (tab === 'all') {
            return <All />
          } if (tab === 'todo') {
            return <Todo />
          } else {
            return <End />
          }
        })()
      }
    </div>
  );
}

export default App;
