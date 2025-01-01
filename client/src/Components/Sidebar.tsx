import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebarContainer}>
      <div>
        <button className={classes.filterButton}>Deadstock</button>
      </div>
      <div>
        <button className={classes.filterButton}>Fabric weight</button>
        <ul>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Heavy</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Medium</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Light</label>
          </li>
        </ul>
      </div>
      <div>
        <button className={classes.filterButton}>Fiber type</button>
        <ul>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Cotton</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Cupro</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Linen</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Nylon</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Polyester</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Rayon</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Silk</label>
          </li>{" "}
          <li>
            <input type="checkbox" />
            <label htmlFor="">Spandex</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Tencel</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Wool</label>
          </li>
        </ul>
      </div>
      <div>
        <button className={classes.filterButton}>Project type</button>
        <ul>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Accessories</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Dresses</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Evening wear</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Outerwear</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Pants</label>
          </li>{" "}
          <li>
            <input type="checkbox" />
            <label htmlFor="">Shirts</label>
          </li>{" "}
          <li>
            <input type="checkbox" />
            <label htmlFor="">Upholstery</label>
          </li>
        </ul>
      </div>
      <div>
        <button className={classes.filterButton}>Sale</button>
      </div>
    </div>
  );
};

export default Sidebar;
