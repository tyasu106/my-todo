export const Layout = ({children, title = "HP by React"}) => {
  return (
    <div>
      <header>
        <nav>{title}</nav>
      </header>
    </div>
  )
}