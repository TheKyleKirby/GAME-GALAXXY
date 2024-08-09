import React from 'react'

const ProfileFavoriteGames = ({games}) => {
  return (
    <div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
      <h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Favorite Games</h3>
      <p className="text-notWhite">List of favorite games...</p>
      <ul>
          {/* todo to fetch games by id, add the titles to an array setGames to the array of titles, then map over to make list. */}
        <li>Super Mario</li>
        <li>Mario Kart</li>
        <li>Super Smash Bros</li>
      </ul>
    </div>  
  )
}

export default ProfileFavoriteGames