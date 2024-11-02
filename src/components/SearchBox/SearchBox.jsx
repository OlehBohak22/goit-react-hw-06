import s from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onChange }) {
  const inputId = useId();
  return (
    <div className={s.searchBox}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        id={inputId}
        placeholder="Enter name"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
