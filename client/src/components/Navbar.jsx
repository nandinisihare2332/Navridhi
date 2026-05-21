import React, { useContext, useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContext);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "Services",
    "About",
    "Dashboard",
    "Workflow",
    "Testimonials",
    "Contact",
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Send verification OTP
  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );

      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Logout
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        backendUrl + "/api/auth/logout"
      );

      if (data.success) {
        setIsLoggedin(false);
        setUserData(false);

        navigate("/", { replace: true });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f8f5ef]/80 backdrop-blur-2xl border-b border-black/5 shadow-xl py-3"
          : "bg-[#f8f5ef]/70 backdrop-blur-xl py-5"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-20 w-52 h-52 bg-yellow-300/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute top-0 right-20 w-52 h-52 bg-[#d9a62e]/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-14 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-300/40 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <img
              src={assets.logo}
              alt="logo"
              className="relative w-14 h-14 object-cover rounded-full border-4 border-white shadow-2xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-500"
            />
          </div>

          <div>
            <h1 className='text-2xl font-bold text-gray-900 tracking-wide'>
          Nav<span className='text-yellow-500'>ridhi</span>
        </h1>

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#8c7b57]">
              Growth In Numbers
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative text-[15px] font-semibold text-[#2a2a2a] hover:text-[#d9a62e] transition-all duration-300 group"
            >
              {item}

              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#d9a62e] opacity-0 group-hover:opacity-100 transition duration-300"></span>

              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-[#d9a62e] to-[#f4d06f] rounded-full transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        {userData ? (
          <div className="relative group">
            <div className="relative group cursor-pointer">

  <div className="flex items-center gap-3 px-3 py-2 rounded-full border border-[#ead7a4] bg-[#fffdf8]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(212,160,23,0.18)] transition-all duration-500">

    {/* Avatar */}
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#d4a017] flex items-center justify-center text-white font-black shadow-lg">

      {userData.name[0].toUpperCase()}

    </div>

    {/* Name */}
    <div className="hidden sm:block">

      <p className="text-sm font-bold text-[#171717]">
        {userData.name}
      </p>

    </div>

  </div>

</div>

            <div className="absolute hidden group-hover:block top-0 right-0 z-20 pt-14">
              <ul className="list-none m-0 p-3 bg-white rounded-2xl shadow-2xl text-sm min-w-[180px] border border-gray-100">

                {!userData?.isAccountVerified && (
                  <li
                    onClick={sendVerificationOtp}
                    className="py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                  >
                    Verify Email
                  </li>
                )}

                <li
                  onClick={logout}
                  className="py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:flex relative overflow-hidden items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#111111] via-[#2b2b2b] to-[#d9a62e] text-white font-semibold shadow-2xl hover:scale-105 hover:shadow-yellow-300/30 transition-all duration-500 group"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>

            <Sparkles
              size={18}
              className="group-hover:rotate-12 transition duration-300 text-[#f4d06f]"
            />

            Login

            <span className="group-hover:translate-x-1 transition duration-300">
              →
            </span>
          </button>
        )}

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#111111] to-[#d9a62e] text-white flex items-center justify-center shadow-xl"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ${
          mobileMenu
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mt-4 mb-5 rounded-3xl bg-[#f8f5ef]/90 backdrop-blur-2xl border border-black/5 shadow-2xl p-6 flex flex-col gap-5">

          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenu(false)}
              className="text-[#2a2a2a] font-semibold text-lg hover:text-[#d9a62e] transition-all duration-300"
            >
              {item}
            </a>
          ))}

          {!userData ? (
            <button
              onClick={() => navigate("/login")}
              className="mt-3 w-full py-4 rounded-full bg-gradient-to-r from-black via-[#2b2b2b] to-[#d9a62e] text-white font-semibold shadow-xl"
            >
              Login →
            </button>
          ) : (
            <button
              onClick={logout}
              className="mt-3 w-full py-4 rounded-full bg-black text-white font-semibold shadow-xl"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;