import { Input } from "postcss";
import loginoptions from "../../constants/loginoptions"
import { useState } from "react"
const Login = () => {
  const [user, setUser]=useState(loginoptions);
  const [loginPreview, setLoginPreview]=useState([]);
  return (
    <div>
        <div className=" shadow-lg my-40 mx-60  max-w-xl border-transparent border-2 rounded-xl bg-blue-200">
        <h1 className="text-4xl text-center">Login</h1>
            <div className="flex justify-center shadow-lg bg-red-50 text-black border-gray-400 rounded-3xl mx-64 my-4">
                  {user?.map((value,id)=>(
                    <button key={id} className={`px-3 text-lg ${
                      loginPreview===value.link
                      ? "bg-blue-500 border-transparent rounded-lg" 
                      : "text-black font-bold"
                    }`}
                    onClick={()=> setLoginPreview.link}>
                      {value.user}
                    </button>
                  ))}
            </div>

            <div className="mx-20 my-4 flex flex-col  ">
              <label className="text-start">Email</label>
              <input className="w-fit text-gray-400 block rounded-md focus:outline-blue-500"
              type="email"
              required>
              </input>
            </div>
            <div className="mx-20 my-4 flex flex-col  ">
              <label className="text-start">Password</label>
              <input className="w-fit text-gray-400 block rounded-md focus:outline-blue-500"
              type="password"
              required>
              </input>
            </div>
        </div>
        </div>
  )
}

export default Login