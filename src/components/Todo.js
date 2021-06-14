import { Layout } from "./Layout"

export const Todo = (props) => {
  const {incompleteTodos, onClickComplete, onClickDelete} = props
  return (
    <div>
      <Layout title={"作業中"}/>
      {/* <h2>未完了のTODO</h2>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul> */}
    </div>
  )
}