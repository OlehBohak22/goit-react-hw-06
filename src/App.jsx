import { useState, useEffect } from "react";
import "./App.css";
import contacts from "./data.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [searchContact, setSearchContact] = useState("");
  const [contactList, setContactList] = useState(() => {
    const savedData = localStorage.getItem("contacts");
    return savedData ? JSON.parse(savedData) : contacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const contactAdd = (newContact) => {
    setContactList((prevContacts) => [...prevContacts, newContact]);
  };

  const contactDelete = (targetId) => {
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== targetId)
    );
  };

  const handleFilterChange = (event) => {
    setSearchContact(event.target.value);
  };

  const filteredContacts = searchContact
    ? contactList.filter((contact) =>
        contact.name.toLowerCase().includes(searchContact.toLowerCase())
      )
    : contactList;

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={contactAdd} />
      <SearchBox value={searchContact} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={contactDelete} />
    </div>
  );
}

export default App;
