import classes from "./Sidebar.module.css";
import { useState } from "react";

const Sidebar = () => {
  const [menuStatus, setMenuStatus] = useState({
    fabricWeight: false,
    fiberType: false,
    projectType: false,
  });

  const toggleMenu = (menu: string) => {
    setMenuStatus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={classes.sidebarContainer}>
      <div>
        <button className={classes.filterButton}>Deadstock</button>
      </div>
      <div>
        <button
          className={classes.filterButton}
          onClick={() => toggleMenu("fabricWeight")}
        >
          Fabric weight <span>+</span>
        </button>
        {menuStatus.fabricWeight && (
          <ul>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Heavy</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Medium</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Light</label>
            </li>
          </ul>
        )}
      </div>
      <div>
        <button
          className={classes.filterButton}
          onClick={() => toggleMenu("fiberType")}
        >
          Fiber type <span>+</span>
        </button>
        {menuStatus.fiberType && (
          <ul>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Cotton</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Cupro</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Linen</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Nylon</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Polyester</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Rayon</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Silk</label>
            </li>{" "}
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Spandex</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Tencel</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Wool</label>
            </li>
          </ul>
        )}
      </div>
      <div>
        <button
          className={classes.filterButton}
          onClick={() => toggleMenu("projectType")}
        >
          Project type
          <span>+</span>
        </button>
        {menuStatus.projectType && (
          <ul>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Accessories</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Dresses</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Evening wear</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Outerwear</label>
            </li>
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Pants</label>
            </li>{" "}
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Shirts</label>
            </li>{" "}
            <li className={classes.filterOption}>
              <input type="checkbox" />
              <label htmlFor="">Upholstery</label>
            </li>
          </ul>
        )}
      </div>
      <div>
        <button className={classes.filterButton}>Sale</button>
      </div>
    </div>
  );
};

export default Sidebar;
