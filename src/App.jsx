import { Outlet } from "react-router-dom"
import NavPage from "./shared/NavPage"
import FooterPage from "./shared/FooterPage"


function App() {

  return (
    <>
      <div className=" bg-pink-300">
        <NavPage />
        <Outlet />
        <FooterPage />
      </div>
    </>
  )
}

export default App
