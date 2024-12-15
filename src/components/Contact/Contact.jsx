import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
