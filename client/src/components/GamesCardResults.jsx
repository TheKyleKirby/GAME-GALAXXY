import React from "react";

const GamesCardResults = ({ game }) => {
  const coverUrl = game.cover?.url ? `https:${game.cover.url}` : null;


  return (
    <div className="max-w-sm bg-darkPurple-dark border-gray-200 rounded-lg shadow-md p-4">
      <div className="relative group">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={game.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-48 bg-gray-400 flex items-center justify-center rounded-lg">
            <span className="text-white">No Image Available</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-lightLavender-dark text-white px-3 py-1 rounded-md hover:bg-pinkyPink m-2">
            Save
          </button>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-goldenOrange mt-4">{game.name}</h2>
      <div className="text-white text-md mb-2">
        Platforms: {game.platforms?.join(", ")}
      </div>
      <div className="text-brightPeach text-sm mb-4">
        Age Rating: {game.age_ratings?.map((rating) => rating.rating).join(", ")}
      </div>
    </div>
  );
};

export default GamesCardResults;





