function ContactCard({ user }) {
  return (
    <div className="contact-card">

      <img src={user.avatar} alt={user.name} />

      <div className="contact-info">
        <h4>{user.name}</h4>

        <span className={user.online ? "online" : "offline"}>
          {user.online ? "Online" : "Offline"}
        </span>

      </div>

    </div>
  );
}

export default ContactCard;