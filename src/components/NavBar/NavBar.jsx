import './NavBar.scss'
import Order from '../Order';
import SearchBar from '../SearchBar';
import styles from './NavBar.module.scss';

const NavBar = (props) => {

    return (
            <div className={styles.navContainer}>
                <SearchBar updateAbv={props.updateAbv} updateSearchText={props.updateSearchText}/>
                <Order updateOrder={props.updateOrder}/>
            </div>
    )
}

export default NavBar;