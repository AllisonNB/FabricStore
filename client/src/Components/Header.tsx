import classes from './Header.module.css';

const Header = () => {
    return ( <div className={classes.header}>
    <h1 className={classes.title}>Trendy Threads</h1>
    <button className={classes.button}>Cart</button>
    </div> );
}
 
export default Header;