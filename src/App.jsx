import { useState } from "react";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

function App() {
  const [activeMenu, setActiveMenu] = useState("Analytics");

  return (
    <>
      {activeMenu === "Analytics" && <Analytics setActiveMenu={setActiveMenu} />}
      {activeMenu === "Profile" && <Profile setActiveMenu={setActiveMenu} />}
    </>
  );
}

export default App;
