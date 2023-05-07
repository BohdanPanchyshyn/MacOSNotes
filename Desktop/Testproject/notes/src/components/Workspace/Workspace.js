import styles from "./Workspace.module.scss";
import {format} from 'date-fns';

const Workspace = () => {
    const date = new Date();
    
    function prepareDate(date) {
        return format(new Date(date), "dd.MM.yyyy HH:MM");
      }

      


  return (
    <div className={styles.workspace_wrapper}>
        <div className={styles.date_wrapper}>
            {prepareDate(date)}
        </div>
    
        <div contentEditable>

        </div>
    </div>
  )
}

export default Workspace;