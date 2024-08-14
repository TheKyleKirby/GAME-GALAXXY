import ProfileDeleteTutorial from "./ProfileDeleteTutorial";
import { useNavigate } from "react-router-dom";

const ProfileCreatedTutorials = ({ tutorials }) => {
  const navigate = useNavigate();

  const handleReadTutorial = (id) => {
    navigate(`/tutorial/${id}`);
  };

  return (
    <div className="bg-gradient-to-r from-pinkyPink-dark to-royalBlurp-light p-6 rounded-lg shadow-md w-full md:w-3/4 lg:w-3/4 mx-auto border-2 border-tealBlue-dark">
      <h2 className="text-3xl text-brightPeach-dark font-extrabold tracking-widest mb-2">Created Tutorials</h2>  
      {tutorials && tutorials.length > 0 ? (
        <ul>
          {tutorials.map((tutorial) => (
            <div key={tutorial._id} className="mb-4">
              <li key={tutorial._id} className="p-6 bg-opacity-80 bg-lightLavender-light rounded-lg shadow-lg border-2 border-brightPeach-light hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => handleReadTutorial(tutorial._id)}
                  className="text-left w-full"
                >
                  <h3 className="text-2xl font-semibold text-deepBlue-dark tracking-tight mb-2">{tutorial.title}</h3>
                </button>
                <p className="text-deepBlue-dark tracking-wide line-clamp-3 mb-4">{tutorial.content}</p>
                <ProfileDeleteTutorial id={tutorial._id} />
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>No tutorials created yet.</p>
      )}
    </div>
  );
};

export default ProfileCreatedTutorials;
