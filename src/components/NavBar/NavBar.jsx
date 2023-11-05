import { VscFolder } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";
import { VscInfo } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <nav className=" fixed top-1/4 start-2 bg-gray-950 p-0.5 last:m-0 rounded-md realisticshadow">
      <NavBarLink title="Home" to={"/"} element={<VscHome />} isLast={false} />
      <NavBarLink
        title="About Me"
        to={"/about"}
        element={<VscInfo />}
        isLast={false}
      />
      <NavBarLink
        title="Projects"
        to={"/projects"}
        element={<VscFolder />}
        isLast={false}
      />
      <NavBarLink
        title="Contact"
        to={"/contact"}
        element={<VscMail />}
        isLast={true}
      />
    </nav>
  );
};

export default NavBar;
