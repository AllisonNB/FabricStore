import classes from "./Sidebar.module.css";
import { useState } from "react";

interface FiltersState {
  weights: string[];
  fibers: string[];
  projects: string[];
  sale: boolean;
}

interface SidebarProps {
  handleFilterSelection: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSale: () => void;
  selectedFilters: FiltersState;
}

const Sidebar = ({
  handleFilterSelection,
  toggleSale,
  selectedFilters,
}: SidebarProps) => {
  type menuState = {
    fabricWeight: boolean;
    fiberType: boolean;
    projectType: boolean;
  };

  const initialMenuState: menuState = {
    fabricWeight: false,
    fiberType: false,
    projectType: false,
  };

  const [expandedMenu, setExpandedMenu] = useState(initialMenuState);

  const toggleMenu = (menu: keyof menuState) => {
    setExpandedMenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={classes.sidebarContainer}>
      <div>
        <button
          className={classes.filterButton}
          onClick={() => toggleMenu("fabricWeight")}
        >
          Fabric weight <span>{expandedMenu.fabricWeight ? "-" : "+"}</span>
        </button>
        {expandedMenu.fabricWeight && (
          <ul>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="weights"
                id="heavy"
                type="checkbox"
              />
              <label htmlFor="heavy">Heavy</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="weights"
                id="medium"
                type="checkbox"
              />
              <label htmlFor="medium">Medium</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="weights"
                id="light"
                type="checkbox"
              />
              <label htmlFor="light">Light</label>
            </li>
          </ul>
        )}
      </div>
      <div>
        <button
          className={classes.filterButton}
          onClick={() => toggleMenu("fiberType")}
        >
          Fiber type <span>{expandedMenu.fiberType ? "-" : "+"}</span>
        </button>
        {expandedMenu.fiberType && (
          <ul>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="cotton"
                type="checkbox"
              />
              <label htmlFor="cotton">Cotton</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="cupro"
                type="checkbox"
              />
              <label htmlFor="cupro">Cupro</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="linen"
                type="checkbox"
              />
              <label htmlFor="linen">Linen</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="nylon"
                type="checkbox"
              />
              <label htmlFor="nylon">Nylon</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="polyester"
                type="checkbox"
              />
              <label htmlFor="polyester">Polyester</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="rayon"
                type="checkbox"
              />
              <label htmlFor="rayon">Rayon</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="silk"
                type="checkbox"
              />
              <label htmlFor="silk">Silk</label>
            </li>{" "}
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="spandex"
                type="checkbox"
              />
              <label htmlFor="spandex">Spandex</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="tencel"
                type="checkbox"
              />
              <label htmlFor="tencel">Tencel</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="fibers"
                id="wool"
                type="checkbox"
              />
              <label htmlFor="wool">Wool</label>
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
          <span>{expandedMenu.projectType ? "-" : "+"}</span>
        </button>
        {expandedMenu.projectType && (
          <ul>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="projects"
                id="accessories"
                type="checkbox"
              />
              <label htmlFor="accessories">Accessories</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="projects"
                id="dresses"
                type="checkbox"
              />
              <label htmlFor="dresses">Dresses</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="projects"
                id="evening-wear"
                type="checkbox"
              />
              <label htmlFor="evening-wear">Evening wear</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="projects"
                id="outerwear"
                type="checkbox"
              />
              <label htmlFor="outerwear">Outerwear</label>
            </li>
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="projects"
                id="pants"
                type="checkbox"
              />
              <label htmlFor="pants">Pants</label>
            </li>{" "}
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="projects"
                id="shirts"
                type="checkbox"
              />
              <label htmlFor="shirts">Shirts</label>
            </li>{" "}
            <li className={classes.filterOption}>
              <input
                onChange={handleFilterSelection}
                name="projects"
                id="upholstery"
                type="checkbox"
              />
              <label htmlFor="upholstery">Upholstery</label>
            </li>
          </ul>
        )}
      </div>
      <div>
        <button
          onClick={toggleSale}
          className={`${classes.filterButton} ${
            selectedFilters.sale ? classes.activeButton : ""
          }`}
        >
          Sale
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
