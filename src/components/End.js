import { Layout } from "./Layout"

export const End = (props) => {
  const {completeTodos, onClickReturn} = props
  return (
    <div>
      <Layout title={"完了"}/>
      {/* <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul> */}
    </div>
  )
}