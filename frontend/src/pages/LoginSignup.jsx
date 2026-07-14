import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginSignup() {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";

  return (
    <div
      className="grid place-items-center h-full w-full min-h-screen font-['Poppins',sans-serif]"
      style={{ background: "linear-gradient(to right, #0f172a, #2563eb)" }}
    >
      <div className="wrapper overflow-hidden max-w-[390px] bg-white p-[30px] rounded-[5px] shadow-[0px_15px_20px_rgba(0,0,0,0.1)]">

        <div
          className="title-text flex w-[200%] transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
          style={{ marginLeft: isLogin ? "0%" : "-50%" }}
        >
          <div className="title w-1/2 text-[35px] font-semibold text-center">Login Form</div>
          <div className="title w-1/2 text-[35px] font-semibold text-center">Signup Form</div>
        </div>

        <div className="form-container w-full overflow-hidden">
          <div className="slide-controls relative flex h-[50px] w-full overflow-hidden my-[30px] mt-[30px] mb-[10px] justify-between border border-[lightgrey] rounded-[5px]">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`slide h-full w-full text-[18px] font-medium text-center leading-[48px] z-[1] transition-all duration-[600ms] ease-in-out ${
                isLogin ? "text-white cursor-default" : "text-black cursor-pointer"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`slide h-full w-full text-[18px] font-medium text-center leading-[48px] z-[1] transition-all duration-[600ms] ease-in-out ${
                !isLogin ? "text-white cursor-default" : "text-black cursor-pointer"
              }`}
            >
              Signup
            </button>
            <div
              className="slider-tab absolute h-full w-1/2 z-0 rounded-[5px] transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
              style={{
                left: isLogin ? "0%" : "50%",
                background: "linear-gradient(to right, #0f172a, #2563eb)",
              }}
            />
          </div>

          <div
            className="form-inner flex w-[200%] transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
            style={{ marginLeft: isLogin ? "0%" : "-50%" }}
          >
            <form className="login w-1/2" onSubmit={(e) => e.preventDefault()}>
              <div className="field h-[50px] w-full mt-[20px]">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="h-full w-full outline-none pl-[15px] rounded-[5px] border border-[lightgrey] border-b-2 text-[17px] transition-all duration-300 ease-in-out focus:border-[#3b82f6] placeholder:text-[#999] focus:placeholder:text-[#b3b3b3]"
                />
              </div>
              <div className="field h-[50px] w-full mt-[20px]">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="h-full w-full outline-none pl-[15px] rounded-[5px] border border-[lightgrey] border-b-2 text-[17px] transition-all duration-300 ease-in-out focus:border-[#3b82f6] placeholder:text-[#999] focus:placeholder:text-[#b3b3b3]"
                />
              </div>
              <div className="pass-link mt-[5px]">
                <Link to="/forgot-password" className="text-[#2563eb] no-underline hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="field btn group h-[50px] w-full rounded-[5px] relative overflow-hidden mt-[20px]">
                <div
                  className="btn-layer h-full w-[300%] absolute left-[-100%] rounded-[5px] transition-all duration-[400ms] ease-in-out group-hover:left-0"
                  style={{ background: "linear-gradient(to right, #0f172a, #2563eb, #0f172a, #2563eb)" }}
                />
                <input
                  type="submit"
                  value="Login"
                  className="h-full w-full z-[1] relative bg-transparent border-none text-white pl-0 rounded-[5px] text-[20px] font-medium cursor-pointer"
                />
              </div>
              <div className="signup-link text-center mt-[30px]">
                Not a member?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="text-[#2563eb] no-underline hover:underline"
                >
                  Signup now
                </button>
              </div>
            </form>

            <form className="signup w-1/2" onSubmit={(e) => e.preventDefault()}>
              <div className="field h-[50px] w-full mt-[20px]">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="h-full w-full outline-none pl-[15px] rounded-[5px] border border-[lightgrey] border-b-2 text-[17px] transition-all duration-300 ease-in-out focus:border-[#3b82f6] placeholder:text-[#999] focus:placeholder:text-[#b3b3b3]"
                />
              </div>
              <div className="field h-[50px] w-full mt-[20px]">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="h-full w-full outline-none pl-[15px] rounded-[5px] border border-[lightgrey] border-b-2 text-[17px] transition-all duration-300 ease-in-out focus:border-[#3b82f6] placeholder:text-[#999] focus:placeholder:text-[#b3b3b3]"
                />
              </div>
              <div className="field h-[50px] w-full mt-[20px]">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  className="h-full w-full outline-none pl-[15px] rounded-[5px] border border-[lightgrey] border-b-2 text-[17px] transition-all duration-300 ease-in-out focus:border-[#3b82f6] placeholder:text-[#999] focus:placeholder:text-[#b3b3b3]"
                />
              </div>
              <div className="field btn group h-[50px] w-full rounded-[5px] relative overflow-hidden mt-[20px]">
                <div
                  className="btn-layer h-full w-[300%] absolute left-[-100%] rounded-[5px] transition-all duration-[400ms] ease-in-out group-hover:left-0"
                  style={{ background: "linear-gradient(to right, #0f172a, #2563eb, #0f172a, #2563eb)" }}
                />
                <input
                  type="submit"
                  value="Signup"
                  className="h-full w-full z-[1] relative bg-transparent border-none text-white pl-0 rounded-[5px] text-[20px] font-medium cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
