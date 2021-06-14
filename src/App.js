import { All } from "./components/All";
import { Todo } from "./components/Todo";
import { End } from "./components/End";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("all");

  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["test1", "test2"]);
  const [completeTodos, setCompleteTodos] = useState(["test3", "test4"]);

  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  const onClickAdd = (event) => {
    if (inputTodo === "") return;
    const newTodos = [...incompleteTodos, inputTodo];
    setIncompleteTodos(newTodos);
    setInputTodo("");
    event.preventDefault();
  };

  // const onClickDelete = (i) => {
  //   const newTodos = [...incompleteTodos];
  //   newTodos.splice(i, 1);
  //   setIncompleteTodos(newTodos);
  // };

  // const onClickComplete = (i) => {
  //   const newIncompleteTodos = [...incompleteTodos];
  //   const newCompleteTodos = [...completeTodos, incompleteTodos[i]];

  //   newIncompleteTodos.splice(i, 1);

  //   setCompleteTodos(newCompleteTodos);
  //   setIncompleteTodos(newIncompleteTodos);
  // };

  // const onClickReturn = (i) => {
  //   const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
  //   const newCompleteTodos = [...completeTodos];

  //   newCompleteTodos.splice(i, 1);

  //   setIncompleteTodos(newIncompleteTodos);
  //   setCompleteTodos(newCompleteTodos);
  // };

  return (
    <div>
      <h1>ToDoリスト</h1>
      <header>
        <ul>
          <li
            onClick={() => {
              setTab("all");
            }}
          >
            すべて
          </li>
          <li
            onClick={() => {
              setTab("todo");
            }}
          >
            作業中
          </li>
          <li
            onClick={() => {
              setTab("end");
            }}
          >
            完了
          </li>
        </ul>
      </header>
      <hr />
      {(() => {
        if (tab === "all") {
          return <All />;
        }
        if (tab === "todo") {
          return <Todo />;
        } else {
          return <End />;
        }
      })()}
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
          {incompleteTodos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{todo}</td>
                <td>
                  <button>作業中</button>
                  <button>削除</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <h2>新規タスクの追加</h2>
      <form onClick={onClickAdd}>
        <input
          placeHolder="TODOを入力"
          value={inputTodo}
          onChange={onChangeInputTodo}
        />
        <button>追加</button>
      </form>
    </div>
  );
}

export default App;
