import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <div className="container mt-5 text-center">Please sign in to view your profile.</div>;
  }

  return (
  <>
    <div className="container mt-5">
  <h2 className="text-center fw-bold mb-4">Your Profile</h2>
  <div className="card shadow p-4 rounded-4 border-0 mx-auto" style={{ maxWidth: "500px" }}>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>User ID:</strong> {user.uid}</p>
  </div>
</div>

// If not logged in:
<div className="container mt-5 text-center">
  <div className="alert alert-warning p-3 rounded-3 shadow-sm">
    Please sign in to view your profile.
  </div>
</div>
  </>
  );
};

export default Profile;
