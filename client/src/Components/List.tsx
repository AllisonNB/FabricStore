import classes from './List.module.css';
import Item from './Item';
import {Fabric} from '../types/fabrics';

type fabricProps = {
    fabrics: Fabric[];
};


const List = ({fabrics}: fabricProps) => {

    console.log('list fab:', fabrics)

    return ( <div className={classes.border}>
       <ul className={classes.gridList}>
        {fabrics.map((fabric, index) => <Item key={index} {...fabric}/>)}
       </ul>
    </div> );
}
 
export default List;