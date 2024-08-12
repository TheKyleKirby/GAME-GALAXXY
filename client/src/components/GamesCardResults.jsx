import React from "react";


// const [games, setGames] = useState([
//     {
//       image: "https://via.placeholder.com/300x200",
//       title: "Epic Quest",
//       userRating: "4.5/5",
//       console: "PC, PS5",
//       maturityRating: "Teen",
//       similarGames: ["Adventure Time", "Epic Journey", "Fantasy World"],
//       tags: ["Adventure", "RPG", "Fantasy"],
//     },
//     {
//       image: "https://via.placeholder.com/300x200",
//       title: "Space Wars",
//       userRating: "4.8/5",
//       console: "Xbox, Switch",
//       maturityRating: "Mature",
//       similarGames: ["Galactic Battle", "Space Odyssey", "Star Wars"],
//       tags: ["Action", "Sci-Fi", "Space"],
//     },
//   ]);

const GamesCardResults = ({game}) => {
    return (
        <div className="max-w-sm bg-darkPurple-dark border-gray-200 rounded-lg shadow-md p-4">
            <div className="relative group">
                <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-lightLavender-dark text-white px-3 py-1 rounded-md hover:bg-pinkyPink m-2">Add</button>
                    <button className="bg-lightLavender-dark text-white px-3 py-1 rounded-md hover:bg-pinkyPink m-2">Save</button>
                </div>
                <h2 className="text-xl font-semibold text-goldenOrange mt-4">{game.title}</h2>
                <div className="text-white text-md mb-2">User Rating: {game.userRating}</div>
                <div className="text-notWhite text-sm">Console: {game.console}</div>
                <div className="text-brightPeach text-sm mb-4">Maturity Rating: {game.maturityRating}</div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white">Similar Games:</h3>
                    <ul className="list-disc list-inside">
                        {game.similarGames.map((similarGame, index) => (
                            <li key={index} className="text-white">
                                {similarGame}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white">Tags:</h3>
                    <div className="flex flex-wrap space-x-2">
                        {game.tags.map((tag, index)=> (
                            <span
                            key={index}
                            className="bg-lightLavender-dark text-white px-2 py-1 rounded-md text-xs mb-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamesCardResults;