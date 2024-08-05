import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16 pb-16">
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      {/* Profile Picture */}
      <div className="w-64 h-64 mb-4 border-4 border-gray-300 rounded-full">
        <img
          src="path/to/profile-picture.jpg"
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      {/* Bio Card */}
      <div className="bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3 mb-6">
        <h2 className="text-2xl font-bold mb-2">Bio</h2>
        <p className="text-gray-700">
          This is a short bio about the user. It can include hobbies, interests,
          or any other relevant information.
        </p>
      </div>
      {/* Horizontal Cards */}
      <div className="flex flex-wrap justify-center gap-4 w-full px-4">
        <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/4 h-50">
          <h3 className="text-xl font-semibold mb-2">Favorite Games</h3>
          <p className="text-gray-700">List of favorite games...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/4 h-50">
          <h3 className="text-xl font-semibold mb-2">Friends List</h3>
          <p className="text-gray-700">List of friends...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/4 h-50">
          <h3 className="text-xl font-semibold mb-2">Saved Tutorials</h3>
          <p className="text-gray-700">List of saved tutorials...</p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;