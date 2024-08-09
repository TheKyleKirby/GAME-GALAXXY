const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-deepBlue-dark pt-8 pb-16">
      <div className="fixed top-0 left-0 w-full bg-darkPurple-dark">
    </div>
      <div className="flex items-center justify-center w-full mt-4">
        {/* Profile Picture */}
        <div className="w-64 h-64 mr-8 border-4 border-tealBlue-light rounded-full">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {/* Bio Card */}
        <div className="bg-darkPurple-dark p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-2 text-brightPeach-light">Bio</h2>
          <p className="text-notWhite">
            This is a short bio about the user. It can include hobbies, interests,
            or any other relevant information.
          </p>
        </div>
      </div>
      {/* Horizontal Cards */}
      <div className="flex flex-wrap justify-center gap-4 w-full px-4 mt-8">
        <div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
          <h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Favorite Games</h3>
          <p className="text-notWhite">List of favorite games...</p>
        </div>
        <div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
          <h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Friends List</h3>
          <p className="text-notWhite">List of friends...</p>
        </div>
        <div className="bg-darkPurple-dark p-4 rounded-lg shadow-md w-full md:w-1/4 h-50 text-notWhite">
          <h3 className="text-xl font-semibold mb-2 text-lightLavender-light">Saved Tutorials</h3>
          <p className="text-notWhite">List of saved tutorials...</p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-darkPurple-dark">
     </div>
    </div>
  );
};

export default Profile;
