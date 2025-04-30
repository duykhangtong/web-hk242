import { useState } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
import "./UserProfilePage.css";

export default function UserProfilePage() {
  const [profile] = useState({
    name: "Miron Mahmud",
    email: "abcxyz@gmail.com",
    phone: "123-456-7890",
    bio: "Tech enthusiast and passionate coder.",
    birthdate: "2004-01-01",
    region: "Vietnam",
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [storedPassword] = useState("12345");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalVariant, setModalVariant] = useState("success");

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (oldPassword !== storedPassword) {
      setModalTitle("Password Change Failed");
      setModalMessage("\u274C Incorrect old password. Please try again.");
      setModalVariant("danger");
      setShowSuccessModal(true);
      return;
    }
    if (newPassword !== confirmPassword) {
      setModalTitle("Password Change Failed");
      setModalMessage("\u274C New password and confirmation do not match!");
      setModalVariant("danger");
      setShowSuccessModal(true);
      return;
    }
    setModalTitle("Password Changed Successfully");
    setModalMessage("\u2705 Your password has been successfully updated! \u2728");
    setModalVariant("success");
    setShowSuccessModal(true);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordForm(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewAvatar(previewUrl);
      setShowPreviewModal(true);
    }
  };

  const handleConfirmAvatar = () => {
    setAvatarUrl(previewAvatar);
    setTimeout(() => {
      URL.revokeObjectURL(previewAvatar);
    }, 100); // tạo delay nhỏ để kịp react kịp render lại
    setPreviewAvatar(null);
    setShowPreviewModal(false);
  };

  const handleCancelAvatar = () => {
    URL.revokeObjectURL(previewAvatar);
    setPreviewAvatar(null);
    setShowPreviewModal(false);
  };

  return (
    <div className="user-profile container py-5">
      <h2 className="mb-4">👤 User Profile</h2>
      <div className="text-center mb-4">
        <div className="avatar-upload mb-3">
          <img
            src={avatarUrl || "https://via.placeholder.com/150x150?text=Avatar"}
            alt="Avatar"
            className="rounded-circle border"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>
        <label className="btn btn-outline-secondary btn-sm">
          Upload Avatar
          <input type="file" accept="image/*" onChange={handleAvatarChange} hidden />
        </label>
      </div>

      <form className="card p-4 shadow-sm mb-4">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" value={profile.name} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" value={profile.email} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" value={profile.phone} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Birthdate</label>
          <input type="date" className="form-control" value={profile.birthdate} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input type="text" className="form-control" value={profile.region} readOnly />
        </div>
        <div className="mb-3">
          <label className="form-label">Biography</label>
          <textarea className="form-control" value={profile.bio} rows={4} readOnly />
        </div>
      </form>

      {!showPasswordForm && (
        <button
          onClick={() => setShowPasswordForm(true)}
          className="btn btn-outline-primary"
        >
          🔒 Change password
        </button>
      )}

      {showPasswordForm && (
        <div className="card p-4 shadow-sm mt-3">
          <h4 className="mb-3">Change Password</h4>
          <form onSubmit={handlePasswordChange}>
            <div className="mb-3">
              <label className="form-label">Old Password</label>
              <InputGroup>
                <FormControl
                  type={showOldPassword ? "text" : "password"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="Enter old password"
                />
                <InputGroup.Text
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showOldPassword ? "👁️" : "🙈"}
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <InputGroup>
                <FormControl
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
                <InputGroup.Text
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showNewPassword ? "👁️" : "🙈"}
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <InputGroup>
                <FormControl
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                />
                <InputGroup.Text
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showConfirmPassword ? "👁️" : "🙈"}
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="d-flex gap-2">
              <Button type="submit" variant="primary">Save</Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setShowPasswordForm(false);
                  setOldPassword("");
                  setNewPassword("");
                  setConfirmPassword("");
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header
          closeButton
          className={modalVariant === "danger" ? "bg-danger text-white" : "bg-success text-white"}
        >
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button
            variant={modalVariant === "danger" ? "light" : "primary"}
            onClick={() => setShowSuccessModal(false)}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showPreviewModal}
        onHide={handleCancelAvatar}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Preview Avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={previewAvatar}
            alt="Preview"
            className="rounded-circle"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelAvatar}>Cancel</Button>
          <Button variant="primary" onClick={handleConfirmAvatar}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
