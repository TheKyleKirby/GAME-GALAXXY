import { useQuery } from '@apollo/client';
import BioCard from '../components/BioCard';
import ProfileFavoriteGames from '../components/ProfileFavoriteGames';
import ProfileFriendsList from '../components/ProfileFriendsList';
import ProfilePicture from '../components/ProfilePicture';
import ProfileSavedTutorials from '../components/ProfileSavedTutorials';
import ProfileCreatedTutorials from '../components/ProfileCreatedTutorials';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  // Query to get the profile data of the currently logged-in user
  const { data, loading, error } = useQuery(QUERY_ME, {
    context: {
      headers: {
        authorization: `Bearer ${Auth.getToken()}`
      }
    }
  });

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

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="flex flex-col items-center gap-14 justify-center min-h-screen bg-deepBlue-dark pt-8 pb-16">
  <div className="fixed top-0 left-0 w-full bg-darkPurple-dark"></div>
  
  {/* Username Heading with Sparkles and Gradient */}
  <div className="flex items-center flex-col gap-12 justify-center w-full mt-2">
    <h1 className="text-5xl font-extrabold tracking-widest relative inline-flex items-center">
      <span className="mr-2 md:mr-4 animate-pulse">✨</span>
      <span className="bg-gradient-to-r from-tealBlue via-brightPeach to-royalBlurp bg-clip-text text-transparent custom-heading">
        {user.username}
      </span>
      <span className="ml-2 md:ml-4 animate-pulse">✨</span>
    </h1>
  </div>

  {/* Profile Picture and Bio Card Inline */}
  <div className="flex items-center justify-center gap-10 mt-6 w-full">
    <ProfilePicture picture={user.profilePicture} />
    <BioCard bio={user.bioText} />
  </div>
  
  {/* Created Tutorials */}
  <ProfileCreatedTutorials tutorials={user.createdTutorials} className="w-full md:w-3/4 lg:w-3/4" />
  
  {/* Horizontal Cards */}
  <div className="flex flex-wrap justify-center gap-10 w-full px-4 mt-8">
    <ProfileFavoriteGames games={user.savedGames} className="w-full md:w-1/3" />
    <ProfileSavedTutorials key={user.savedTutorials._id} tutorials={user.savedTutorials} className="w-full md:w-1/3" />
    <ProfileFriendsList friends={user.friends} className="w-full md:w-1/3" />
  </div>

  <div className="fixed bottom-0 left-0 w-full bg-darkPurple-dark"></div>
</div>

  );
  
};

export default Profile;
