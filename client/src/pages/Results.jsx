// import SearchTutorialCard from "../components/SearchTutorialCard";

import SearchTutorialCard from "../components/SearchTutorialCard"
import UserCardResults from "../components/UserCardResults";
import GamesCardResults from "../components/GamesCardResults";
import { GET_TUTORIALS } from "../utils/queries"
import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"

const Results = () => {

  const [users, setUsers] = useState([
    {
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
// ---------------------sample data from here-------------------------------
  const {loading, error, data} = useQuery(GET_TUTORIALS)
  const [tutorials, setTutorials] = useState([])

  useEffect(() => {
  console.log('Query data:', data); // Log the entire data object to see the object tree to help construct
  if (data) {
    setTutorials(data.allTutorials)
  }else{
    console.log('error in getting tutorial data')
  }
}, [data]);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
// ---------------------to here until search functions returning--------------------------------------------------------------



  // todo search functions will go here. and delete query above.



  return (
    
    <div className="flex flex-col justify-center min-h-screen bg-deepBlue-dark pt-8 pb-16">
      <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4 mb-4 w-full">
        <h2 className="text-2xl font-bold">Results Page</h2>
      </div>
      <div className="grid gap-4">

      {/*Tutorials Section*/}
      {tutorials.length > 0 && (
        <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Tutorials</h2>
          <SearchTutorialCard tutorials={tutorials} />
        </div>
        )}

        {/* Users Section */}
        <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Users</h2>
          <div className="space-y-4">
            {users.map((user, index) => (
              <UserCardResults key={index} users={user} />
            ))}
          </div>
        </div>

        {/* Games Section */}
        {/* <div className="bg-mutedPastelBlue-dark shadow-md rounded p-4">
          <h2 className="text-xl font-bold">Games</h2>
          <div className="space-y-4">
            {games.map((game, index) => (
              <GamesCardResults key={index} game={game} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Results;