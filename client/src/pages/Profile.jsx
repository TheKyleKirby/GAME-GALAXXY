import { useQuery } from '@apollo/client';
import BioCard from '../components/BioCard';
import ProfileFavoriteGames from '../components/ProfileFavoriteGames';
import ProfileFriendsList from '../components/ProfileFriendsList';
import ProfilePicture from '../components/ProfilePicture'
import ProfileSavedTutorials from '../components/ProfileSavedTutorials';


const Profile = () => {

const user = {
  
    "_id": "123456",
    "username": "Mario",
    "email": "mario@nintendoworld.com",
    "password": "itsameMario123",
    "bio": "It's-a me, Mario!",
    "topGames": "Super Mario, Mario Kart, Super Smash Bros.",
    "friends": [],//add some seeded users _ids
    "savedGames": [],//add some IGDB game ids
    "creatorsFollowing": [],//add some seeded users _ids
    "savedTutorials": [],//add some seeded tutorial _ids
    "createdTutorials": [],//create a tutorial?
    "isCreator": false,
    "profilePicture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8dc5db0-7fe9-4e59-bc80-4365bf3cd02f/dghljbg-18f6b72e-0de6-40ed-af74-a1497da4659a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4ZGM1ZGIwLTdmZTktNGU1OS1iYzgwLTQzNjViZjNjZDAyZlwvZGdobGpiZy0xOGY2YjcyZS0wZGU2LTQwZWQtYWY3NC1hMTQ5N2RhNDY1OWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fjyAFriujy6NwjDQRhhclaHKv1tFU0WIUygeLMlk_XI"
  
  
}
//todo game function to find by id-for favorite games
  // const SavedGames
  // const { data, loading, error } = useQuery(GAME_BY_ID, {variables: {user.savedGames.id}})
  // const games= data.games

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-deepBlue-dark pt-8 pb-16">
      <div className="fixed top-0 left-0 w-full bg-darkPurple-dark">
    </div>
      <div className="flex items-center justify-center w-full mt-4">
        {/* Profile Picture */}
        <ProfilePicture picture={user.profilePicture}/>
        </div>
        {/* Bio Card */}
        <BioCard bio={user.bio} />
      {/* Horizontal Cards */}
      <div className="flex flex-wrap justify-center gap-4 w-full px-4 mt-8">
        
        <ProfileFavoriteGames /> {/* games={games} put in component to pass when we get game id's returning */} 
        
        <ProfileFriendsList friends={user.friends}/> 

        <ProfileSavedTutorials tutorials={user.savedTutorials} />
      
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-darkPurple-dark">
    </div>
    </div>
  );
};

export default Profile;
