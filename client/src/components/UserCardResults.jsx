import { useMutation } from "@apollo/client"
import { ADD_FRIEND } from "../utils/mutations"
import { useNavigate } from "react-router-dom"
import { QUERY_ME } from "../utils/queries";



const UserCardResults = ({ user }) => {
    
    const [addFriend] = useMutation(ADD_FRIEND, {
        refetchQueries: [{ query: QUERY_ME }]
    })
    const navigate = useNavigate()
    
    const handleAddFriend = async (id) => {

        try {
            await addFriend({
                variables: {
                    friends: id
                }
            })

            alert("New Friend saved!")
            navigate('/profile')
        } catch {
            alert("Failed to add friend.")
        }
    }

    return (
        <div className="max-w-sm bg-darkPurple-dark border-gray-200 rounded-lg shadow-md p-4">
            <div className="flex items-center space-x-4 mb-4">
                <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-contain"
                />
                <div>
                    {/* make name link to profile with user._id */}
                    <h2 className="text-xl text-goldenOrange font-semibold">{user.username}</h2>
                    <div className="flex space-x-2 mt-2">
                        <button
                            onClick={() => handleAddFriend(user._id)}
                            className="bg-lightLavender-dark text-white px-3 py-1 rounded-md hover:bg-pinkyPink">Add Friend</button>
                    </div>
                </div>
            </div>
            {/* TODO: ICEBOX TOP 3 GAMES */}
            {/* <div>
                <h3 className="text-lg text-white font-semibold mb-2">Top 3 Favorite Games:</h3>
                <ul className="list-disc list-inside">
                    {user.favoriteGames.map((game, index) => (
                        <li key={index} className="text-white">{game}</li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};

export default UserCardResults;