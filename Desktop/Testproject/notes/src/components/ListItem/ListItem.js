import styles from "./ListItem.module.scss";
import NoteItem from "./NoteItem";

const ListItem = () => {

    const notes = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            text: "Lorem ipsum dolor sit.",
            createdAt: new Date(),
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            text: "Lorem ipsum dolor sit.",
            createdAt: new Date(),
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            text: "Lorem ipsum dolor sit.",
            createdAt: new Date(),
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet.",
            text: "Lorem ipsum dolor sit.",
            createdAt: new Date(),
        }
    ]

  return (
    <div>
        {notes.map((note) => (
            <NoteItem key={note.id} {...note}/>
        ))}
    </div>
  )
}

export default ListItem;