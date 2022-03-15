import { useState, createContext, useContext } from "react";
import { set } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext(null);
toast.configure();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  let isLoggedIn = false;
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    {
      firstName: "arslan",
      lastName: "yousaf",
      email: "arslan@gmail.com",
      password: "12345",
      confirmPassword: "12345",
    },
    {
      firstName: "kamran",
      lastName: "yousaf",
      email: "kamran@gmail.com",
      password: "12345",
      confirmPassword: "12345",
    },
  ]);

  const login = (obj) => {
    users.map((user) => {
      if (user.email === obj.email && user.password === obj.password) {
        setUser(user.firstName);
        debugger;
        isLoggedIn = true;
        return navigate("/", { replace: true });
      }
    });
    if (isLoggedIn) {
      return toast.success("Logged In", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      return toast.error("Email Or Password is Incorrect", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  const logout = () => {
    setUser(null);
  };
  const signup = (obj) => {
    setUsers([...users, obj]);
    toast.success("Signed up", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
    return navigate("/", { replace: true });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
