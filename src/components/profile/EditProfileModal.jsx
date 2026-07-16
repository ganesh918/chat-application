import { useState } from "react";

function EditProfileModal({
  user,
  setUser,
  closeModal,
}) {
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    setUser(form);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Edit Profile</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <label>About</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
        />

        <label>Profile Image URL</label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Paste image URL"
        />

        <div className="modal-buttons">

          <button
            className="save-btn"
            onClick={saveProfile}
          >
            Save
          </button>

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditProfileModal;