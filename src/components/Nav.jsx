// rrd imports
import { Form, NavLink, useNavigate, useLocation } from "react-router-dom";

// library
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/logomark.svg";

import supabase from "../../supabaseClient";

const Nav = ({ userName, user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRedirect = () => {
    localStorage.removeItem("userName");
    navigate(0);
  };
  const handleSignout = async () => {
    await supabase.auth.signOut();
    setTimeout(() => {
      navigate("/main");
    }, 3000);
  };

  const handleRefresh = async () => {
    const path = location.pathname;

    if (path.startsWith("/budget/")) {
      navigate(-1);
    } else if (path === "/") {
      navigate(0);
    }
  };

  return (
    <nav>
      <NavLink to="/" onClick={handleRefresh} aria-label="Go to home">
        <img src={logomark} alt="iBudget Home" height={30} />
        <span>Budgetify</span>
      </NavLink>
      {userName && (
        <button
          onClick={handleRedirect}
          className="btn btn--dark text-white bg-hslblack flex items-center justify-center px-4 py-2 text-base font-normal mr-2"
        >
          <span>Go Back</span>
          <ArrowUturnLeftIcon width={20} />
        </button>
      )}

      {user && (
        <button
          className="btn text-dark bg-electric_blue_opaque flex items-center justify-center px-4 py-2 text-base font-bold mr-2"
          onClick={handleSignout}
        >
          Signout
        </button>
      )}
    </nav>
  );
};
export default Nav;
