import SearchTutorialCard from "../components/SearchTutorialCard";
import UserCardResults from "../components/UserCardResults";
import GamesCardResults from "../components/GamesCardResults";
import { GET_TUTORIALS, WHOLE_GAME_INFO } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MAIN_SEARCH } from "../utils/queries";


const Results = () => {
  const useQueryParams = () =>{
    return new URLSearchParams(useLocation().search)
  }

  const queryParams = useQueryParams()
  const searchString = queryParams.get('query')
console.log(searchString)

// !this is not getting called???
  const { data, loading, error } = useQuery(MAIN_SEARCH, {
    variables: { searchString }
  })
  console.log("Search String:", searchString);
  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);


  console.log(JSON.stringify(data))
  if(loading)<p>Loading...</p>
  if(error)<p>Error {error.message}</p>

  const { users, tutorials, games } = data.mainSearch || {}

  return (
    <div className="flex flex-col justify-center min-h-screen bg-deepBlue-dark pt-8 pb-16">
      <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4 mb-4 w-full">
        <h2 className="text-2xl font-bold">Results Page for "{searchString}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        
        {/* Tutorials Section */}
        {tutorials.length > 0 && (
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
            {users.length > 0 && (
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
            {games.length > 0 && (
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
