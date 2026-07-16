import { useState } from "react";
import { FaEdit, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaBriefcase } from "react-icons/fa";
import EditProfileModal from "./EditProfileModal";
import "./Profile.css";

function ProfileCard() {
  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState({
    name: "Ganesh Kumar Reddy",
    email: "ganeshkumar@gmail.com",
    phone: "+91 9876543210",
    bio: "Associate Software Engineer | React Developer",
    location: "Rayachoti, Andhra Pradesh",
    profession: "Software Engineer",
    dob: "o6/07/2004",
    image: "https://i.pravatar.cc/250?img=12",
  });

  return (
    <div className="profile-page">

      <div className="profile-card">

        <img
          src={user.image}
          alt={user.name}
          className="profile-image"
        />

        <h2>{user.name}</h2>

        <p className="profile-bio">{user.bio}</p>

        <div className="profile-info">

          <div className="info-row">
            <FaEnvelope />
            <span>{user.email}</span>
          </div>

          <div className="info-row">
            <FaPhoneAlt />
            <span>{user.phone}</span>
          </div>

          <div className="info-row">
            <FaBriefcase />
            <span>{user.profession}</span>
          </div>

          <div className="info-row">
            <FaMapMarkerAlt />
            <span>{user.location}</span>
          </div>

          <div className="info-row">
            <FaBirthdayCake />
            <span>{user.dob}</span>
          </div>

        </div>

        <button
          className="edit-profile-btn"
          onClick={() => setShowModal(true)}
        >
          <FaEdit />
          Edit Profile
        </button>

      </div>

      {showModal && (
        <EditProfileModal
          user={user}
          setUser={setUser}
          closeModal={() => setShowModal(false)}
        />
      )}

    </div>
  );
}

export default ProfileCard;