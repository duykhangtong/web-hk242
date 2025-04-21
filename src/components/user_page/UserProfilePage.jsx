// src/pages/UserProfilePage.jsx
import { useState } from "react";
import "./UserProfilePage.css";

export default function UserProfilePage() {
  const [profile] = useState({
    name: "Miron Madmud",
    email: "abcxyz@gmail.com",
    phone: "123-456-7890",
    bio: "Tech enthusiast and passionate coder.",
    birthdate: "2004-01-01",
    region: "Vietnam"
  });

  return (
    <div className="user-profile container py-5">
      <h2 className="mb-4">👤 User Profile</h2>
      <form className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={profile.name}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={profile.email}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={profile.phone}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Birthdate</label>
          <input
            type="date"
            className="form-control"
            name="birthdate"
            value={profile.birthdate}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            value={
              profile.region 
            }
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Biography</label>
          <textarea
            className="form-control"
            name="bio"
            value={profile.bio}
            rows={4}
            readOnly
          ></textarea>
        </div>
      </form>
    </div>
  );
}