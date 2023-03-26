import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserInfo" element={<UserInfo />} />
          <Route
            path="/UserProfile"
            element={<UserProfile name={""} email={""} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
