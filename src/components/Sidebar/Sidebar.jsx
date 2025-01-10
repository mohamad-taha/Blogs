import Links from "../Links/Links";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className={`${props.display} sidebar`}>
      <Links />
    </div>
  );
};

export default Sidebar;
