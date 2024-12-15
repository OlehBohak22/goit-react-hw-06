import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactSlice";
import { deleteContact } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();

  // Отримуємо фільтровані контакти
  const contacts = useSelector((state) =>
    selectFilteredContacts(state, state.filters.name)
  );

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
