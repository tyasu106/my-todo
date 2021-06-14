import { Layout } from "./Layout";

export const All = (props) => {
  const {
    incompleteTodos,
    onClickComplete,
    onClickDelete,
    completeTodos,
    onClickReturn,
  } = props;

  return (
    <div>
      {/* <div>
        <Layout title={"すべて"} />
        <h2>未完了のTODO</h2>
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
        </ul>
      </div>
      <div>
        <h2>完了のTODO</h2>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};
