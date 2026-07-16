import { FaArrowLeft, FaPhoneAlt, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import "./Profile.css";

function ContactProfile({ contact, goBack }) {
  if (!contact) return null;

  return (
    <div className="contact-profile-container">

      <button
        className="back-btn"
        onClick={goBack}
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="contact-profile-card">

        <img
          src={contact.avatar}
          alt={contact.name}
          className="contact-profile-image"
        />

        <h2>{contact.name}</h2>

        <p
          className={
            contact.online
              ? "status-online"
              : "status-offline"
          }
        >
          {contact.online ? "Online" : "Offline"}
        </p>

        <div className="contact-info">

          <div className="info-item">
            <FaPhoneAlt />
            <span>{contact.phone}</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>{contact.email}</span>
          </div>

          <div className="info-item">
            <FaInfoCircle />
            <span>{contact.about}</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactProfile;