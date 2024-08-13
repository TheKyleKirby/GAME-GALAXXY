import { useMutation } from "@apollo/client"
import { DELETE_TUTORIAL } from "../utils/mutations"
import { QUERY_ME } from '../utils/queries'



const ProfileDeleteTutorial = ({id}) => {
    const [deleteTutorial, {data, loading, error}] = useMutation(DELETE_TUTORIAL, {
        variables: {
            id
        },
        refetchQueries: [{ query: QUERY_ME}],
    })
    
    if(data){
        console.log('Tutorial Deleted!');
    }

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error("ApolloError details:", error);
        return <p>Error: {error.message}</p>;
    }

    const handleDelete = (event) => {
        event.preventDefault()

        if(!id){
            console.log(`error finding tutorial with the id of ${id}`)
        }
        deleteTutorial(id)
        
    }



    return (
        <div className="flex flex-col md:flex-row justify-end items-end gap-3 p-3 ">
            <button
                onClick={handleDelete}
                className="bg-pinkyPink-dark text-white text-xs font-medium p-3 rounded hover:bg-notWhite hover:text-pinkyPink-dark"
            >
                Delete
            </button>

            {/* update Tutorial */}
            <button
                className="bg-tealBlue-light text-white text-xs font-bold p-3 rounded hover:bg-royalBlurp-light"
            >
                Edit
            </button>
        </div>
    );
}

export default ProfileDeleteTutorial;