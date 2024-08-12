import React from "react";

const GamesCardResults = ({ game }) => {
  return (
    <div className="max-w-sm bg-darkPurple-dark border-gray-200 rounded-lg shadow-md p-4">
      <div className="relative group">
        {game.cover && (
          <img
            src={`https:${game.cover.url}`}
            alt={game.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-lightLavender-dark text-white px-3 py-1 rounded-md hover:bg-pinkyPink m-2">
            Add
          </button>
          <button className="bg-lightLavender-dark text-white px-3 py-1 rounded-md hover:bg-pinkyPink m-2">
            Save
          </button>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-goldenOrange mt-4">{game.name}</h2>
      <div className="text-white text-md mb-2">ID: {game.id}</div>
      <div className="text-white text-md mb-2">
        Platforms: {game.platforms.join(", ")}
      </div>
      <div className="text-brightPeach text-sm mb-4">
        Age Rating: {game.age_ratings.map(rating => rating.rating).join(", ")}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">Similar Games:</h3>
        <ul className="list-disc list-inside">
          {game.similar_games.map((similarGame, index) => (
            <li key={index} className="text-white">
              Game ID: {similarGame}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">Tags:</h3>
        <div className="flex flex-wrap space-x-2">
          {game.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-lightLavender-dark text-white px-2 py-1 rounded-md text-xs mb-2"
            >
              Tag ID: {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesCardResults;
