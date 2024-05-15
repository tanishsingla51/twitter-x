import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { GoDiff } from "react-icons/go";
// import { getUser } from "../redux/userSlice";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (login) {
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        //  dispatch(getUser(res?.data?.user));
        if (res.data.success) {
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error("error");
      }
    } else {
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          {
            name,
            username,
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          setLogin(true);
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error("error");
      }
    }
  };

  const loginSignupHandler = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  return (
    <div>
      <div className="top-[280px] left-[300px] absolute">
        <BsTwitterX className=" text-[350px] " />
      </div>

      <div
        className={
          login
            ? "top-[220px] left-[980px] absolute"
            : "top-[170px] left-[980px] absolute"
        }
      >
        <h1 className="text-7xl font-extrabold text-black text-center font-sans">
          Happening now
        </h1>
        <h1 className="text-4xl font-extrabold text-black text-center font-sans mt-12 mr-[370px]  ">
          {login ? "Login To X." : "Join today."}
        </h1>
      </div>

      <form
        onSubmit={submitHandler}
        className={
          login
            ? "flex flex-col w-[300px] top-[380px] left-[980px] absolute"
            : "flex flex-col w-[300px] top-[320px] left-[980px] absolute"
        }
      >
        {!login && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-12 rounded-full p-3 px-12 outline-none hover:bg-slate-100 border-[2px] border-black font-sans font-bold "
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 rounded-full p-3 px-12 outline-none hover:bg-slate-100 border-[2px] border-black font-sans font-bold "
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={
            login
              ? "mt-10 rounded-full p-3 px-12 outline-none hover:bg-slate-100 border-[2px] border-black font-sans font-bold"
              : "mt-2 rounded-full p-3 px-12 outline-none hover:bg-slate-100 border-[2px] border-black font-sans font-bold"
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 rounded-full p-3 px-12 outline-none hover:bg-slate-100 border-[2px] border-black font-sans font-bold "
        />
        <button className="bg-blue-500 text-white rounded-full p-3 mt-4 font-sans font-bold hover:bg-blue-600">
          {login ? "Login" : "Join"}
        </button>
        <p className="text-xs ml-1 mt-2 hover:text-blue-400">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
        <p className="mt-4 ml-36 ">or</p>
        <h1 className="mt-3 font-bold text-lg">
          {login ? "Join today." : "Already have an account?"}
        </h1>
        <button
          className="text-blue-500 font-bold border rounded-full px-4 py-2 mt-3 hover:bg-sky-100 font-sans"
          onClick={(e) => loginSignupHandler(e)}
        >
          {login ? " Sign up" : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default Login;
