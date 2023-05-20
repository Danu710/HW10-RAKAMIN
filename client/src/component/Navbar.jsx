import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header aria-label="Site Header">
      <div className="fixed z-20 flex items-center justify-between w-full px-5 pt-3 md:px-12 backdrop-blur-md">
        <a className="block text-teal-600" href="/">
          <img
            src="	https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
            alt="Tokopedia"
          />
        </a>

        <div className="flex items-center justify-end flex-1 ">
          <div className="flex flex-row items-center gap-3">
            <div className="sm:flex">
              <Link
                className="block rounded-md bg-greenTokped px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
                to="/postregister">
                Register
              </Link>
            </div>
            <div className="sm:flex">
              <Link
                className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-greenTokped transition hover:text-teal-600/75 sm:block"
                to="/post">
                Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
