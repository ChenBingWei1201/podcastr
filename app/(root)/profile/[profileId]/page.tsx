import React from "react";

function Profile({params: { profileId} }: { params : {profileId: string}}) {
  return (
  <div className="text-white-1">
    <h1 className="text-xl text-white-1">
      {profileId}
    </h1>
    </div>
  );
}

export default Profile;
