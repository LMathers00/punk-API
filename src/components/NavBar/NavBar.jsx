import './NavBar.scss'
import Order from '../Order/Order';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.scss';

const NavBar = (props) => {

    return (
            <div className={styles.navContainer}>
                <SearchBar updateAbv={props.updateAbv} updateSearchText={props.updateSearchText}/>
                <Order updateOrder={props.updateOrder}/>
            </div>
    )
}

export default NavBar;