import classes from './Header.module.css';

const Header = () => {
    return ( <div className={classes.border}>
    <h1>Trendy Threads</h1>
    <button>Cart</button>
    </div> );
}
 
export default Header;