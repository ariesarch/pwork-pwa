import React from "react";
import Image from "next/image";
const UserProfile = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/user-profile.jpeg"
        alt="user-profile"
        width="60"
        height="60"
        className="rounded-full h-[60px] object-cover"
      />
      <div>
        <h2>Welcome back</h2>
        <p>Account name</p>
      </div>
    </div>
  );
};

export default UserProfile;
