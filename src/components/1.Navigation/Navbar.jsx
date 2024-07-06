import { useNavigate, Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const MenuItemData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Nyati Films",
    path: "/about",
  },
  {
    title: "Services & Ongoing Production(s)",
    path: "/services",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-[85px] hidden absolute z-[10] top-0 lg:flex items-center justify-between px-2 lg:px-16 ">
      {/** logo */}
      <div>
        <Link to="/">
          <img
            src={Logo}
            className=" w-[65.74px] h-[66.02px]  navbar-brand cursor-pointer"
            alt="logo"
          />
        </Link>
      </div>

      {/** menu items */}
      <div className="h-full">
        <ul className="flex justify-center items-center space-x-10 text-xs  md:text-xs xl:text-base leading-19.36 text-[#FFFAF6] h-full">
          {MenuItemData.map((data, index) => {
            return (
              <li key={index} className="">
                <NavLink
                  to={data.path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-[#EE5170] border-b-2 cursor-pointer  py-4 px-3"
                      : " border-b-2 border-b-transparent cursor-pointer py-4 px-3 hover:border-b-[#EE5170]"
                  }
                >
                  {data.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/** action button */}
      <NavLink to="/donate">
        <button
          className="bg-[#EE5170] w-[190.34px] h-[41.38px] rounded-[49.66px]
          font-inter font-semibold text-16 leading-19.36 text-[#FFFAF6] cursor-pointer"
          type="button"
        >
          Donate to Nyati
        </button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
