import ProfileDeleteTutorial from "./ProfileDeleteTutorial";
import { useNavigate } from "react-router-dom";

const ProfileCreatedTutorials = ({ tutorials }) => {
    const navigate = useNavigate()

    const handleReadTutorial = (id) => {
        navigate(`/tutorial/${id}`)
    }

    
    return (
        <div className=" bg-darkPurple-dark p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3 ">
            <h2 className="text-3xl text-brightPeach-light font-extrabold tracking-widest mb-2">Created Tutorials</h2>
            {tutorials && tutorials.length > 0 ? (
                <ul>
                    {tutorials.map((tutorial) => (
                        <div key={tutorial._id} className=" space-x-3">
                        <li key={tutorial._id} className="p-3 bg-lightLavender-light rounded-lg">
                            <button 
                            onClick={() => handleReadTutorial(tutorial._id)}>
                            <h3 className="text-xl font-semibold text-deepBlue-dark tracking-tight">{tutorial.title}</h3>
                            </button>
                            <p className="text-deepBlue-dark tracking-wide line-clamp-3">{tutorial.content}</p>
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
