import { Link } from "react-router-dom";
import React from "react";

const UserCardResults = ({users}) => {
    return (
        <div className="max-w-sm bg-darkPurple-dark border-gray-200 rounded-lg shadow-md p-4">
            <div className="flex items-center space-x-4 mb-4">
                <img
                src={users.profilePicture}
                alt="Profile"
                className="w-16 h-16 rounded-full object-contain"
                />
             <div>
                <h2 className="text-xl font-semibold">{users.name}</h2>
                <div className="flex space-x-2 mt-2">
                    <button className="bg-lightLavender-dark text-white px-3 py-1 rounded-md hover:bg-pinkyPink">Add Friend</button>
                    <button className="bg-lightLavender-dark text-white px-3 py-1 rounded-md hover:bg-pinkyPink">Save</button>
                </div>
              </div>   
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Top 3 Favorite Games:</h3>
                <ul className="list-disc list-inside">
                    {users.favoriteGames.map((game, index) => (
                        <li key={index} className="text-white">{game}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserCardResults;