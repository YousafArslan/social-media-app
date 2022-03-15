import { Provider } from "react-redux";
import store from "./redux/store";
import Profile from "./pages/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoMatch from "./components/NoMatch";
import { AuthProvider, useAuth } from "./components/auth";
import Login from "./components/login/Login";
import { RequireAuth } from "./components/RequireAuth";
import SignUp from "./components/signup/SignUp";

function App() {
  const auth = useAuth();
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="profile/:id"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>

          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;
