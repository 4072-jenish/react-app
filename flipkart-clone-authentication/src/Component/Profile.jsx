import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <div className="container mt-5 text-center">Please sign in to view your profile.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Your Profile</h2>
      <div className="card p-4 mt-3 shadow-sm">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.uid}</p>
        {/* You can add more fields here if you store them */}
      </div>
    </div>
  );
};

export default Profile;
