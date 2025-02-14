import { useRouteError, Link, useNavigate } from "react-router-dom";

// library imports
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>Uh oh! We’ve got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button
          className="btn btn--dark text-white bg-hslblack flex items-center justify-center px-4 py-2 text-base font-normal mr-2"
          onClick={() => navigate(-1)}
        >
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          className="btn btn--dark text-white bg-hslblack flex items-center justify-center px-4 py-2 text-base font-normal mr-2"
        >
          <HomeIcon width={20} />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
};
export default Error;
