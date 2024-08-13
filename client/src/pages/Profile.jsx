import { useQuery } from '@apollo/client';
import BioCard from '../components/BioCard';
import ProfileFavoriteGames from '../components/ProfileFavoriteGames';
import ProfileFriendsList from '../components/ProfileFriendsList';
import ProfilePicture from '../components/ProfilePicture';
import ProfileSavedTutorials from '../components/ProfileSavedTutorials';
import ProfileCreatedTutorials from '../components/ProfileCreatedTutorials';
import { QUERY_USER, QUERY_ME, GAME_BY_ID } from '../utils/queries';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

const Profile = () => {
  
  // const { username: userParam } = useParams();

  // const { loading, data, error } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // Query to get the profile data of the currently logged-in user
  const { data, loading, error } = useQuery(QUERY_ME, {
    context: {
      headers: {
        authorization: `Bearer ${Auth.getToken()}`
      }
    }
  });

  // Debugging: Log the received data
  console.log(JSON.stringify(data));

  // Show loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error case and display an error message
  if (error) {
    console.error('Error fetching user data:', error);
    return <div>Error fetching user data: {error.message}</div>;
  }

  // Extract user data from the response
  const user = data?.me || data?.user || {};

  // Debugging: Log the user data
  console.log(JSON.stringify(user));

  // navigate to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile" />;
  // }

  // If no user is found (not logged in), prompt them to log in or sign up
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  // todo game function to find by id-for favorite games
  // const SavedGames
  // const { data, loading, error } = useQuery(GAME_BY_ID, {variables: {user.savedGames.id}})
  // const games= data.games

  return (
    <div className="flex flex-col items-center gap-20 justify-center min-h-screen bg-deepBlue-dark pt-8 pb-16">
      <div className="fixed top-0 left-0 w-full bg-darkPurple-dark"></div>
      <div className="flex items-center flex-col gap-20 justify-center w-full mt-4">
        <h1 className='text-5xl font-bold tracking-wider text-goldenOrange-dark'>{user.username}</h1>
        {/* Profile Picture */}
        <ProfilePicture picture={user.profilePicture} />
      </div>
      {/* Bio Card */}
      <BioCard bio={user.bioText} />
      {/* Created Tutorials */}
      <ProfileCreatedTutorials tutorials={user.createdTutorials} /> {/* Pass the tutorials here */}
      {/* Horizontal Cards */}
      <div className="flex flex-wrap justify-center gap-10 w-full px-4 mt-8">
        <ProfileFavoriteGames games={user.savedGames} />
        <ProfileSavedTutorials tutorialIds={user.savedTutorials} />
        <ProfileFriendsList friends={user.friends} />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-darkPurple-dark"></div>
    </div>
  );
  
};

export default Profile;
