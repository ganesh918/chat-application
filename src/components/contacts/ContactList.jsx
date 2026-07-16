import { useState } from "react";
import ContactCard from "./ContactCard";
import users from "../../data/users";
import "./Contacts.css";

function ContactList() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contacts-container">

      <div className="contacts-header">

        <h2>Contacts</h2>

        <button className="new-chat-btn">
          + New Chat
        </button>

      </div>

      <input
        type="text"
        placeholder="Search Contact..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="contact-search"
      />

      <div className="contacts-list">

        {filteredUsers.map((user) => (
          <ContactCard
            key={user.id}
            user={user}
          />
        ))}

      </div>

    </div>
  );
}

export default ContactList;