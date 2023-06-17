import Menu from "./menu";
import "./style.css";

function App({ dir }: { dir : "ltr" | "rtl" }) {
  return (
    <>
      <div dir={dir}>
        <Menu />
      </div>
    </>
  )
}

export default App
