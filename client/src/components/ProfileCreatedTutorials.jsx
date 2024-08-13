import React from "react";
import ProfileDeleteTutorial from "./ProfileDeleteTutorial";

const ProfileCreatedTutorials = () => {
    return (
        <div className="bg-darkPurple-dark p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3 relative">
        <h2 className="text-2xl font-bold mb-2 text-brightPeach-light">Created Tutorials</h2>
        <ProfileDeleteTutorial />
        </div>
    )
}

export default ProfileCreatedTutorials;