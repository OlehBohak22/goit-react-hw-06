import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <Contact
          onDelete={onDelete}
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
}
