import classes from './Item.module.css';
import {Fabric} from '../types/fabrics';

type fabricProps = Fabric;

const Item = (fabric: fabricProps) => {
    
    console.log('item', fabric)
    
    return ( <>
        <div className={classes.border}>
            <img src='' alt="fabric sample" />
            <h1>Fabric Name - Color</h1>
            <p>$$ / yard</p>
            <div>
                <button>Quick Shop</button>
            </div>
        </div>
    </> );
}
 
export default Item;