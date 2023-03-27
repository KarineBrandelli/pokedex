import { Route, Routes, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserInfo" element={<UserInfo />} />
          <Route
            path="/UserProfile"
            element={<UserProfile name={""} email={""} />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
