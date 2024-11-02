import s from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={s.contactItem}>
      <div>
        <p>
          <svg>
            <use href="assets/icons.svg#icon-user"></use>
          </svg>
          {name}
        </p>
        <p>
          <svg>
            <use href="assets/icons.svg#icon-phone"></use>
          </svg>
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
