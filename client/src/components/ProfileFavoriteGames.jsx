import { useQuery } from "@apollo/client"
import { GAME_BY_ID } from "../utils/queries"

const ProfileFavoriteGames = ({gameIds}) => {

  console.log(gameIds)

  const { data, loading, error } = useQuery(GAME_BY_ID, {
    variables:{
      id: gameIds
    },
    skip: !gameIds || gameIds.length === 0
  })

console.log(JSON.stringify(data))

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const games = data ? data.game : []

  return (
    <div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
      <h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Favorite Games</h3>
      <p className="text-notWhite">List of favorite games...</p>
      <ul>
        {games.length > 0 ? (
          games.map((game) => (
            <li key={game.id}>
              <a href='{game.url}'>{game.name}</a>
            </li>
          ))
        ) : 
        ( <li> No game favorites yet </li>)
        }
      
        {/* <li>Super Mario</li>
        <li>Mario Kart</li>
        <li>Super Smash Bros</li> */}
      </ul>
    </div>  
        
        
  )
}

export default ProfileFavoriteGames