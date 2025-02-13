import classes from "./List.module.css";
import Item from "./Item";
import { Fabric } from "../types/fabrics";

type fabricProps = {
  filteredFabrics: Fabric[];
};

const List = ({ filteredFabrics }: fabricProps) => {
  return (
    <div className={classes.border}>
      {filteredFabrics.length === 0 ? (
        <h2 className={classes.displayMessage}>
          No fabrics matched your selection. Try using fewer filters.
        </h2>
      ) : (
        <ul className={classes.gridList}>
          {filteredFabrics.map((fabric, index) => (
            <Item key={index} fabric={fabric} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
