import React from "react";

const ProfileDelete = () => {
    const handleDelete = () => {
        console.log('Delete button clicked');
    }

    return (
        <button
        onClick={handleDelete}
        className="absolute top-28 left-4 bg-pinkyPink text-white p-2 rounded"
        >
            Delete Friend
        </button>
    );
}

export default ProfileDelete;