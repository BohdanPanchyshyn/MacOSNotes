import styles from "./ListItem.module.scss";

const NoteItem = (props) => {

    const {id,title,text, createdAt} = props;
  return (
    <div className={styles.item_wrapper} >
        <h4 >{title}</h4>
        <div className={styles.text_wrapper}>
           <span>{createdAt.toLocaleDateString()}</span> 
           {text}
        </div>
    </div>
  )
}

export default NoteItem;