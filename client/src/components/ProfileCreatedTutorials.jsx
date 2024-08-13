import React from "react";
import ProfileDeleteTutorial from "./ProfileDeleteTutorial";

const ProfileCreatedTutorials = ({ tutorials }) => {
    return (
        <div className="bg-darkPurple-dark p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3 relative">
            <h2 className="text-2xl font-bold mb-2 text-brightPeach-light">Created Tutorials</h2>
            {tutorials && tutorials.length > 0 ? (
                <ul>
                    {tutorials.map((tutorial) => (
                        <li key={tutorial._id} className="mb-2">
                            <h3 className="text-lg font-semibold">{tutorial.title}</h3>
                            <p>{tutorial.content}</p>
                            <ProfileDeleteTutorial tutorialId={tutorial._id} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tutorials created yet.</p>
            )}
        </div>
    );
};



export default ProfileCreatedTutorials;
