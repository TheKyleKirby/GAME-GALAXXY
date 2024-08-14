import React from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { GAME_BY_NAME, MAIN_SEARCH } from "../utils/queries";
import GamesCardResults from "../components/GamesCardResults";
import UserCardResults from "../components/UserCardResults";
import SearchTutorialCard from "../components/SearchTutorialCard";

const Results = () => {
  const useQueryParams = () => {
    return new URLSearchParams(useLocation().search);
  };

  const queryParams = useQueryParams();
  const searchString = queryParams.get("query") || ""; // Fallback to empty string if searchString is null
  console.log(searchString);

  // Main search query for users and tutorials
  const { data: mainSearchData, loading: mainSearchLoading, error: mainSearchError } = useQuery(MAIN_SEARCH, {
    variables: { searchString },
    skip: !searchString, // Skip query if searchString is empty
  });

  // Game search query by name
  const { data: gameSearchData, loading: gameSearchLoading, error: gameSearchError } = useQuery(GAME_BY_NAME, {
    variables: { name: searchString },
    skip: !searchString, // Skip query if searchString is empty
  });

  console.log("Search String:", searchString);
  console.log("Main Search Data:", mainSearchData);
  console.log("Game Search Data:", gameSearchData);

  if (mainSearchLoading || gameSearchLoading) return <p>Loading...</p>;
  if (mainSearchError || gameSearchError) return <p>Error: {mainSearchError?.message || gameSearchError?.message}</p>;

  const { users, tutorials } = mainSearchData?.mainSearch || {};
  const games = gameSearchData?.gameByName || [];

  return (
    <div className="flex flex-col justify-center min-h-screen bg-deepBlue-dark pt-8 pb-16">
      <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4 mb-4 w-full">
        <h2 className="text-2xl font-bold">Results Page for "{searchString}"</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        
        {/* Tutorials Section */}
        {tutorials?.length > 0 && (
          <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4">
            <h2 className="text-xl font-bold">Tutorials</h2>
            <div className="space-y-4">
              {tutorials.map((tutorial) => (
                <SearchTutorialCard key={tutorial._id} tutorial={tutorial} />
              ))}
            </div>
          </div>
        )}

        {/* Users Section */}
        {users?.length > 0 && (
          <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4">
            <h2 className="text-xl font-bold">Users</h2>
            <div className="space-y-4">
              {users.map((user) => (
                <UserCardResults key={user._id} user={user} />
              ))}
            </div>
          </div>
        )}

        {/* Games Section */}
        {games?.length > 0 && (
          <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4">
            <h2 className="text-xl font-bold">Games</h2>
            <div className="space-y-4">
              {games.map((game) => (
                <GamesCardResults key={game.id} game={game} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;










{/* 
// const [users, setUsers] = useState([
//   {
    profilePicture: "https://via.placeholder.com/150",
    name: "Subtronics",
    favoriteGames: ["Game 1", "Game 2", "Game 3"],
  },
  {
    profilePicture: "https://via.placeholder.com/150",
    name: "Level Up",
    favoriteGames: ["Game A", "Game B", "Game C"],
  },
]);

const { loading, error, data } = useQuery(GET_TUTORIALS);
const [tutorials, setTutorials] = useState([]);

useEffect(() => {
  if (data) {
    setTutorials(data.allTutorials);
  } else {
    console.log("error in getting tutorial data");
  }
}, [data]);

const { loading: gameLoading, error: gameError, data: gameData } = useQuery(WHOLE_GAME_INFO, {
  variables: { id: "623" }, // Replace "623" with the actual game ID you want to fetch
});

const [games, setGames] = useState([]);

useEffect(() => {
  if (gameData) {
    setGames([gameData.wholeGameInfo]);
  } else {
    console.log("error in getting game data");
  }
}, [gameData]);

if (loading || gameLoading) return <p>Loading...</p>;
if (error || gameError) return <p>Error: {error.message}</p>; */}
