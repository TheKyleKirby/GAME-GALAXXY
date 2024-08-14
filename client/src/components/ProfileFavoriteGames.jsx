import { useQuery } from "@apollo/client";
import { GAME_BY_ID } from "../utils/queries";

const ProfileFavoriteGames = ({ gameIds }) => {
  const { data, loading, error } = useQuery(GAME_BY_ID, {
    variables: { id: gameIds },
    skip: !gameIds || gameIds.length === 0,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const games = data ? data.game : [];

  return (
    <div className="bg-gradient-to-br from-darkPurple-dark to-[#8c5b94] p-4 rounded-lg shadow-md w-full md:w-1/4 text-notWhite border-2 border-tealBlue-light">
      <h3 className="text-3xl tracking-wide font-semibold mb-5 text-lightLavender-light">Favorite Games</h3>
      <p className="text-notWhite">List of favorite games...</p>
      <ul>
        {games.length > 0 ? (
          games.map((game) => (
            <li key={game.id}>
              <a href={game.url} className="text-goldenOrange hover:underline">{game.name}</a>
            </li>
          ))
        ) : (
          <li>No game favorites yet</li>
        )}
      </ul>
    </div>
  );
};

export default ProfileFavoriteGames;
