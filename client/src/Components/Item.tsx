import classes from './Item.module.css';
import {Fabric} from '../types/fabrics';

type fabricProps = Fabric;

const Item = (fabric: fabricProps) => {
    
    console.log('item', fabric)
    
    return ( <>
        <div className={classes.border}>
            <img src={fabric.image} alt="fabric sample" />
            <h1>{fabric.name}</h1>
            <p>${fabric.quantities.cost} / yard</p>
            <div className={classes.buttonContainer}>
                <button className={classes.button}>Quick Add</button>
            </div>
        </div>
    </> );
}
 
export default Item;