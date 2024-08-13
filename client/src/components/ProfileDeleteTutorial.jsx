import React from "react";

const ProfileDeleteTutorial = () => {
    const handleDelete = () => {
        console.log('Delete button clicked');
    }

    return (
        <button
        onClick={handleDelete}
        className="bg-red-500 text-white p-2 rounded absolute top-4 right-4"
        >
            Delete Tutorial
        </button>
    );
}

export default ProfileDeleteTutorial;