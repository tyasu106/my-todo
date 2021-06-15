import { All } from "./components/All";
import { Todo } from "./components/Todo";
import { End } from "./components/End";
import { useState } from "react";

function App() {
  // タブ切り替え
  const [tab, setTab] = useState("all");

  // 追加機能　
  const [inputTodo, setInputTodo] = useState("");
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
    // 作業中
  const [incompleteTodos, setIncompleteTodos] = useState(["test1", "test2"]);
    // 完了
  const [completeTodos, setCompleteTodos] = useState(["test3", "test4"]);
    // 削除
  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };
  
  // ラジオボタン実装
  const [val, setVal] = useState('all');
  const handleChange = e => setVal(e.target.value);

  

  // 作業中・完了切り替え
  const onClickComplete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];

    newIncompleteTodos.splice(i, 1);

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickReturn = (i) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    const newCompleteTodos = [...completeTodos];

    newCompleteTodos.splice(i, 1);

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <div>
      <h1>ToDoリスト</h1>
      <header>
        <table>
          <tr>
            <td>
              <input
                type="radio"
                value="all"
                onChange={handleChange}
                checked={val === 'all'}
                onClick={() => {
                  setTab("all");
                }}
              />
              すべて
            </td>
            <td>
              <input
                type="radio"
                value="incomp"
                onChange={handleChange}
                checked={val === 'incomp'}
                onClick={() => {
                  setTab("todo");
                }}
              />
              作業中
            </td>
            <td>
              <input
                type="radio"
                value="comp"
                onChange={handleChange}
                checked={val === 'comp'}
                onClick={() => {
                  setTab("end");
                }}
              />
              完了
            </td>
          </tr>
        </table>
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
                  <button onClick={() => onClickDelete(index)}>削除</button>
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
