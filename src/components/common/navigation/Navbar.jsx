import { useState } from "react"
import { sidebarContext } from "./navContext"
import Header from "./Header";
const Navbar = () => {
    const [status, setStatus] = useState(false);
  return (
    <sidebarContext.Provider value={[status, setStatus]}>
              <Header />
    </sidebarContext.Provider>
  )
}

export default Navbar