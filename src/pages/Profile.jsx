import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/profile/ProfileCard";

function Profile() {
  const navigate = useNavigate();

  return (
    <div>

      <button
        className="back-btn"
        onClick={() => navigate("/dashboard")}
      >
        <FaArrowLeft />
        Back
      </button>

      <ProfileCard />

    </div>
  );
}

export default Profile;