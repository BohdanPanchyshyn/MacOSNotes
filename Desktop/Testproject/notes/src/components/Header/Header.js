import Searchbox from "../SearchBox/Searchbox";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.button_box}>
        <button>Add</button>
        <button>Delete</button>
        <button>Edit</button>
      </div>
      <Searchbox/>
    </header>
  )
}

export default Header;