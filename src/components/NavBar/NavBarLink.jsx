import { NavLink } from "react-router-dom";

const NavBarLink = ({ to, element, title, isLast }) => {
  return (
    <NavLink to={to}>
      {({ isActive, isPending }) => (
        <div
          title={title}
          className={
            "p-4 text-xl rounded hover:text-slate-950 transition delay-150 ease-in-out hover:bg-white hover:shadow-inner " +
            (isActive
              ? " text-slate-950 bg-white shadow-inner "
              : " text-dirtyWhite bg-slate-900 ") +
            (isLast ? "" : " mb-0.5")
          }
        >
          {element}
        </div>
      )}
    </NavLink>
  );
};

export default NavBarLink;
